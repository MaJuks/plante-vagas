import { ConflictException, Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VagaService {
  constructor(private prisma: PrismaService) {}

  async create(createVagaDto: CreateVagaDto, empresaId: number) {
    const { beneficios, etapas, ...vagaData } = createVagaDto;
    return this.prisma.vaga.create({
      data: {
        ...vagaData,
        empresaId,
        beneficios: { createMany: { data: beneficios } },
        etapas: { createMany: { data: etapas } },
      },
      include: { beneficios: true, etapas: true },
    });
  }

  async findAll() {
    return this.prisma.vaga.findMany({
      include: {
        beneficios: true,
        empresa: { select: { id: true, fantasyName: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByEmpresa(empresaId: number) {
    return this.prisma.vaga.findMany({
      where: { empresaId },
      include: { beneficios: true, etapas: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const vaga = await this.prisma.vaga.findUnique({
      where: { id },
      include: {
        beneficios: true,
        etapas: true,
        empresa: { select: { id: true, fantasyName: true, name: true } },
      },
    });

    if (!vaga) throw new ConflictException('Vaga não encontrada');

    return vaga;
  }

  async update(id: number, updateVagaDto: UpdateVagaDto, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id } });

    if (!vaga) throw new ConflictException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) throw new ConflictException('Sem permissão para editar esta vaga');

    const { beneficios, etapas, ...vagaData } = updateVagaDto;

    return this.prisma.$transaction(async (tx) => {
      if (beneficios) {
        await tx.beneficio.deleteMany({ where: { vagaId: id } });
      }
      if (etapas && etapas.length > 0) {
        await tx.etapaProcessoSeletivo.deleteMany({ where: { vagaId: id } });
      }
      return tx.vaga.update({
        where: { id },
        data: {
          ...vagaData,
          ...(beneficios && { beneficios: { createMany: { data: beneficios } } }),
          ...(etapas && { etapas: { createMany: { data: etapas } } }),
        },
        include: { beneficios: true, etapas: true },
      });
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
