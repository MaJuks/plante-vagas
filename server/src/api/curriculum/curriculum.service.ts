import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import axios from 'axios';

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

  async importFromPdf(fileBuffer: Buffer): Promise<CreateCurriculumDto> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new InternalServerErrorException('OPENAI_API_KEY não configurada');
    }

    const base64Pdf = fileBuffer.toString('base64');

    const prompt = `Analise este currículo em PDF e extraia as informações retornando APENAS um JSON válido com a seguinte estrutura exata (sem explicações, sem markdown):
{
  "experiencias": [
    {
      "cargo": "string",
      "empresa": "string",
      "descricao": "string",
      "inicioData": "YYYY-MM-DDTHH:mm:ss.000Z",
      "fimData": "YYYY-MM-DDTHH:mm:ss.000Z ou null",
      "empregoAtual": false
    }
  ],
  "formacoes": [
    {
      "nivelFormacao": "fundamental|medio|tecnico|superior|posgraduacao|mestrado|doutorado",
      "grauFormacao": "string",
      "curso": "string",
      "nomeInstituicao": "string",
      "status": "completo|em andamento|incompleto",
      "inicioData": "YYYY-MM-DDTHH:mm:ss.000Z",
      "fimData": "YYYY-MM-DDTHH:mm:ss.000Z ou null"
    }
  ],
  "certificados": [
    {
      "certificate_name": "string",
      "nomeInstituicao": "string",
      "descricao": "string"
    }
  ],
  "idiomas": [
    {
      "idioma": "portugues|ingles|espanhol|frances|alemao|italiano|mandarim|japones|coreano|arabe|russo",
      "nivel": "basico|intermediario|avancado|fluente|nativo"
    }
  ],
  "diferenciais": [
    {
      "descricao": "string"
    }
  ]
}

Regras importantes:
- Datas desconhecidas: use "2000-01-01T00:00:00.000Z"
- fimData null quando empregoAtual=true
- Extraia habilidades/competências como diferenciais
- Retorne SOMENTE o JSON, sem nenhum texto adicional`;

    let responseText: string;
    try {
      const { data } = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          max_tokens: 4096,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'file',
                  file: {
                    filename: 'curriculum.pdf',
                    file_data: `data:application/pdf;base64,${base64Pdf}`,
                  },
                },
                {
                  type: 'text',
                  text: prompt,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );

      responseText = data.choices[0].message.content;
    } catch (err: any) {
      const msg = err?.response?.data?.error?.message || err.message;
      throw new InternalServerErrorException(`Erro ao chamar a API de IA: ${msg}`);
    }

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new InternalServerErrorException('A IA não retornou um JSON válido');
    }

    try {
      return JSON.parse(jsonMatch[0]) as CreateCurriculumDto;
    } catch {
      throw new InternalServerErrorException('Falha ao interpretar o JSON retornado pela IA');
    }
  }
}
