import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class CurriculumService {
 constructor(private prisma: PrismaService) {}


  async create(createCurriculumDto: CreateCurriculumDto, userId: number) {

    const existCurriculum = await this.prisma.curriculo.findFirst({
      where: { usuarioId: userId },
    });

    if (existCurriculum) {
      throw new ConflictException('Currículo já cadastrado para este usuário');
    }

    return this.prisma.curriculo.create({                                                                                                                                                       
    data: {                                                                                                                                                                                   
      usuarioId: userId,
      experiencias: {                                                                                                                                                                         
        createMany: { data: createCurriculumDto.experiencias },
      },                                                                                                                                                                                      
      formacoes: {                        
        createMany: { data: createCurriculumDto.formacoes },
      },                                                                                                                                                                                      
      idiomas: {
        createMany: { data: createCurriculumDto.idiomas },                                                                                                                                    
      },                                      
      certificados: {                     
        createMany: { data: createCurriculumDto.certificados },
      },                                                                                                                                                                                      
      diferenciais: {
        createMany: { data: createCurriculumDto.diferenciais },                                                                                                                               
      },          
    },
  });
                      
  }

  findAll() {
    return this.prisma.curriculo.findMany({
      include: {
        experiencias: true,
        formacoes: true,
        idiomas: true,
        certificados: true,
        diferenciais: true,
      },
    });
  }

  async findOne( userId: number) {
  console.log('USER ID:', userId);
    const curriculum = await this.prisma.curriculo.findFirst({
      where: { usuarioId: userId },
      include: {
        experiencias: true,
        formacoes: true,
        idiomas: true,
        certificados: true,
        diferenciais: true,
      },
    });

     if (!curriculum) {
      throw new ConflictException('Currículo não encontrado para este usuário');
    }


    return curriculum
  }

  async update(userId: number, curriculumDto: CreateCurriculumDto) {
    const curriculo = await this.prisma.curriculo.findFirst({ where: { usuarioId: userId } });

    if (!curriculo) {
      throw new ConflictException('Currículo não encontrado para este usuário');
    }

    const curriculoId = curriculo.id;

    const update = await this.prisma.$transaction(async (tx) => {
      await tx.experienciaProfissional.deleteMany({ where: { curriculoId } });
      await tx.formacaoAcademica.deleteMany({ where: { curriculoId } });
      await tx.idioma.deleteMany({ where: { curriculoId } });
      await tx.certificado.deleteMany({ where: { curriculoId } });
      await tx.diferencial.deleteMany({ where: { curriculoId } });
      return tx.curriculo.update({
        where: { id: curriculoId },
        data: {
          experiencias: { createMany: { data: curriculumDto.experiencias } },
          formacoes: { createMany: { data: curriculumDto.formacoes } },
          idiomas: { createMany: { data: curriculumDto.idiomas } },
          certificados: { createMany: { data: curriculumDto.certificados } },
          diferenciais: { createMany: { data: curriculumDto.diferenciais } },
        },
      });
    });
    return update;
  }

  async remove(id:number, userId: number) {

     const existCurriculum = await this.prisma.curriculo.findFirst({
      where: { usuarioId: userId },
    });

    if (!existCurriculum) {
      throw new ConflictException('Currículo não encontrado para este usuário');
    }

    return this.prisma.curriculo.delete({
      where: { id: existCurriculum.id },
    });
  }
}
