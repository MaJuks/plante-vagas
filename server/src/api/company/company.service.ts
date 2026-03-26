import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CompanyDto } from './dto/create-company-dto';
import { Company } from './entities/company.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async createCompany(createCompany: CompanyDto): Promise<Company> {
    console.log(createCompany);
    const existEmail = await this.prisma.userCompany.findFirst({
      where: { email: createCompany.email },
    });

    const existCnpj = await this.prisma.userCompany.findFirst({
      where: { cnpj: createCompany.cnpj },
    });

    if (existEmail) {
      throw new ConflictException('Email já cadastrado');
    }

    if (existCnpj) {
      throw new ConflictException('CNPJ já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(createCompany.password, 10);

    const { address, ...companyData } = createCompany;

    return this.prisma.userCompany.create({
      data: {
        ...companyData,
        password: hashedPassword,
        Address: {
          create: {
            city: address.city,
            district: address.district,
            street: address.street,
            number: address.number,
            postalCode: address.postalCode,
            complement: address.complement,
            state: address.state,
            country: address.country || 'Brasil',
          },
        },
      },
      include: {
        Address: true,
      },
    });
  }

  async getInfo(userId: number) {
    const user = await this.prisma.userCompany.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new ConflictException('Usuário não encontrado');
    }
    return {
      user,
    };
  }
}
