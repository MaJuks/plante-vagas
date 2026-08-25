import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CandidaturaInput } from './ingestao/fonte-de-candidatura.interface';
import { MoveCandidaturaDto } from './dto/move-candidatura.dto';

const CANDIDATO_SELECT = { id: true, name: true, email: true, phone: true, photoUrl: true };
const EMPRESA_SELECT = { id: true, fantasyName: true, name: true, logoUrl: true };

@Injectable()
export class CandidaturaService {
  constructor(private prisma: PrismaService) {}


  async aplicar(input: CandidaturaInput) {
    const vaga = await this.prisma.vaga.findUnique({
      where: { id: input.vagaId },
      include: { etapas: { orderBy: { id: 'asc' }, take: 1 } },
    });
    if (!vaga) throw new NotFoundException('Vaga não encontrada');

    const primeiraEtapa = vaga.etapas[0];
    if (!primeiraEtapa) {
      throw new ConflictException('Vaga não possui etapas configuradas');
    }

    const candidaturaExistente = await this.prisma.candidatoEtapa.findFirst({
      where: {
        candidatoId: input.candidatoId,
        etapa: { vagaId: input.vagaId },
      },
    });
    if (candidaturaExistente) {
      throw new ConflictException('Candidato já se candidatou a esta vaga');
    }

    return this.prisma.candidatoEtapa.create({
      data: {
        candidatoId: input.candidatoId,
        etapaId: primeiraEtapa.id,
        origem: input.origem,
      },
      include: { etapa: { include: { vaga: true } } },
    });
  }

  async minhas(candidatoId: number) {
    return this.prisma.candidatoEtapa.findMany({
      where: { candidatoId },
      include: {
        etapa: {
          include: {
            vaga: { include: { empresa: { select: EMPRESA_SELECT } } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async porVaga(vagaId: number, empresaId: number) {
    await this.assertVagaPertenceEmpresa(vagaId, empresaId);

    return this.prisma.candidatoEtapa.findMany({
      where: { etapa: { vagaId } },
      include: { candidato: { select: CANDIDATO_SELECT }, etapa: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async porEtapa(etapaId: number, empresaId: number) {
    const etapa = await this.prisma.etapaProcessoSeletivo.findUnique({
      where: { id: etapaId },
      include: { vaga: true },
    });
    if (!etapa) throw new NotFoundException('Etapa não encontrada');
    if (etapa.vaga.empresaId !== empresaId) {
      throw new ConflictException('Sem permissão');
    }

    return this.prisma.candidatoEtapa.findMany({
      where: { etapaId },
      include: { candidato: { select: CANDIDATO_SELECT } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async mover(id: number, dto: MoveCandidaturaDto, empresaId: number) {
    const candidatura = await this.prisma.candidatoEtapa.findUnique({
      where: { id },
      include: { etapa: { include: { vaga: true } } },
    });
    if (!candidatura) throw new NotFoundException('Candidatura não encontrada');
    if (candidatura.etapa.vaga.empresaId !== empresaId) {
      throw new ConflictException('Sem permissão');
    }

    if (dto.etapaId !== undefined) {
      const novaEtapa = await this.prisma.etapaProcessoSeletivo.findUnique({
        where: { id: dto.etapaId },
      });
      if (!novaEtapa || novaEtapa.vagaId !== candidatura.etapa.vagaId) {
        throw new ConflictException('Etapa inválida para esta vaga');
      }
    }

    return this.prisma.candidatoEtapa.update({
      where: { id },
      data: {
        ...(dto.etapaId !== undefined && { etapaId: dto.etapaId }),
        ...(dto.statusCandidato !== undefined && {
          statusCandidato: dto.statusCandidato,
        }),
        ...(dto.observacoes !== undefined && { observacoes: dto.observacoes }),
        ...(dto.rejeitado !== undefined && {
          rejeitado: dto.rejeitado,
          // rejeitar um candidato desfaz um eventual "avançou" anterior —
          // os dois estados não fazem sentido juntos
          ...(dto.rejeitado && { statusCandidato: false }),
        }),
        ...(dto.motivoRejeicao !== undefined && {
          motivoRejeicao: dto.motivoRejeicao,
        }),
      },
      include: { etapa: true, candidato: { select: CANDIDATO_SELECT } },
    });
  }

  private async assertVagaPertenceEmpresa(vagaId: number, empresaId: number) {
    const vaga = await this.prisma.vaga.findUnique({ where: { id: vagaId } });
    if (!vaga) throw new NotFoundException('Vaga não encontrada');
    if (vaga.empresaId !== empresaId) {
      throw new ConflictException(
        'Sem permissão para ver candidatos desta vaga',
      );
    }
  }
}
