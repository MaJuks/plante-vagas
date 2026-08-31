import { ConflictException, Injectable } from '@nestjs/common';
import { CreateVagaDto, ProcessoSeletivoDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VagaService {
  constructor(private prisma: PrismaService) {}

  private normalizarProcesso(dto: ProcessoSeletivoDto) {
    return { ...dto, dataInicio: new Date(dto.dataInicio) };
  }

  async create(createVagaDto: CreateVagaDto, empresaId: number) {
    const { beneficios, requisitos, etapas, processoSeletivo, ...vagaData } = createVagaDto;
    return this.prisma.vaga.create({
      data: {
        ...vagaData,
        empresaId,
        beneficios: { createMany: { data: beneficios } },
        requisitos: { createMany: { data: requisitos } },
        etapas: { createMany: { data: etapas } },
        processoSeletivo: { create: this.normalizarProcesso(processoSeletivo) },
      },
      include: { beneficios: true, requisitos: true, etapas: true, processoSeletivo: true },
    });
  }

  async findAll() {
    return this.prisma.vaga.findMany({
      include: {
        beneficios: true,
        requisitos: true,
        empresa: { select: { id: true, fantasyName: true, name: true, logoUrl: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByEmpresa(empresaId: number) {
    return this.prisma.vaga.findMany({
      where: { empresaId },
      include: {
        beneficios: true,
        requisitos: true,
        etapas: true,
        processoSeletivo: true,
        empresa: { select: { id: true, fantasyName: true, name: true, logoUrl: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const vaga = await this.prisma.vaga.findUnique({
      where: { id },
      include: {
        beneficios: true,
        requisitos: true,
        etapas: true,
        processoSeletivo: true,
        empresa: { select: { id: true, fantasyName: true, name: true, logoUrl: true } },
      },
    });

    if (!vaga) throw new ConflictException('Vaga não encontrada');

    return vaga;
  }

  async update(id: number, updateVagaDto: UpdateVagaDto, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id } });

    if (!vaga) throw new ConflictException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão para editar esta vaga');

    const { beneficios, requisitos, etapas, processoSeletivo, ...vagaData } = updateVagaDto;

    return this.prisma.$transaction(async (tx) => {
      if (beneficios) {
        await tx.beneficio.deleteMany({ where: { vagaId: id } });
      }
      if (requisitos) {
        await tx.requisito.deleteMany({ where: { vagaId: id } });
      }
      if (etapas && etapas.length > 0) {
        await tx.etapaProcessoSeletivo.deleteMany({ where: { vagaId: id } });
      }
      if (processoSeletivo) {
        const normalizado = this.normalizarProcesso(processoSeletivo);
        await tx.processoSeletivo.upsert({
          where: { vagaId: id },
          create: { ...normalizado, vagaId: id },
          update: normalizado,
        });
      }
      return tx.vaga.update({
        where: { id },
        data: {
          ...vagaData,
          ...(beneficios && { beneficios: { createMany: { data: beneficios } } }),
          ...(requisitos && { requisitos: { createMany: { data: requisitos } } }),
          ...(etapas && { etapas: { createMany: { data: etapas } } }),
        },
        include: { beneficios: true, requisitos: true, etapas: true, processoSeletivo: true },
      });
    });
  }

  async upsertProcessoSeletivo(vagaId: number, dto: ProcessoSeletivoDto, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id: vagaId } });

    if (!vaga) throw new ConflictException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão');

    const normalizado = this.normalizarProcesso(dto);
    return this.prisma.processoSeletivo.upsert({
      where: { vagaId },
      create: { ...normalizado, vagaId },
      update: normalizado,
    });
  }

  async updateEtapa(etapaId: number, data: { nome: string; descricao: string }, empresaId: number) {
    const etapa = await this.prisma.etapaProcessoSeletivo.findUnique({
      where: { id: etapaId },
      include: { vaga: true },
    });

    if (!etapa) throw new ConflictException('Etapa não encontrada');
    if (etapa.vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão');

    return this.prisma.etapaProcessoSeletivo.update({
      where: { id: etapaId },
      data: { nome: data.nome, descricao: data.descricao },
    });
  }

  async removeEtapa(etapaId: number, empresaId: number) {
    const etapa = await this.prisma.etapaProcessoSeletivo.findUnique({
      where: { id: etapaId },
      include: { vaga: true },
    });

    if (!etapa) throw new ConflictException('Etapa não encontrada');
    if (etapa.vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão');

    const totalEtapas = await this.prisma.etapaProcessoSeletivo.count({
      where: { vagaId: etapa.vagaId },
    });
    if (totalEtapas <= 1) {
      throw new ConflictException(
        'Não é possível excluir a última etapa do processo seletivo. Adicione outra etapa antes, ou exclua a vaga inteira.',
      );
    }

    return this.prisma.etapaProcessoSeletivo.delete({ where: { id: etapaId } });
  }

  async addEtapa(vagaId: number, etapa: { nome: string; descricao: string }, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id: vagaId } });

    if (!vaga) throw new ConflictException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão');

    return this.prisma.etapaProcessoSeletivo.create({
      data: { nome: etapa.nome, descricao: etapa.descricao, vagaId },
    });
  }

  async remove(id: number, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id } });

    if (!vaga) throw new ConflictException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão para excluir esta vaga');

    return this.prisma.vaga.delete({ where: { id } });
  }
}
