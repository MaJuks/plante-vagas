import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUser: CreateUserDTO): Promise<User> {
    const existEmail = await this.prisma.userCandidate.findFirst({
      where: { email: createUser.email },
    });
    const existCpf = await this.prisma.userCandidate.findFirst({
      where: { cpf: createUser.cpf },
    });

    if (existCpf) {
      throw new ConflictException('Cpf já cadastrado');
    }

    if (existEmail) {
      throw new ConflictException('email já cadastrado');
    }
    const hashedPassword = await bcrypt.hash(createUser.password, 10);

    return this.prisma.userCandidate.create({
      data: { ...createUser, password: hashedPassword },
    });
  }

  async findAll(skip = 0, filters?: Prisma.UserCandidateWhereInput) {
    return this.prisma.userCandidate.findMany({
      skip,
      where: filters,
    });
  }

  async getInfo(userId: number) {
    const user = await this.prisma.userCandidate.findUnique({
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
