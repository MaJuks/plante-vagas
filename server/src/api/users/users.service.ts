import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { find } from 'rxjs';
import { UpdateUserDTO } from './dto/update-user-deto';

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

    const { address, ...userData } = createUser;

    return this.prisma.userCandidate.create({
      data: {
        ...userData,
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

  async findAll(skip = 0, filters?: Prisma.UserCandidateWhereInput) {
    return this.prisma.userCandidate.findMany({
      skip,
      where: filters,
    });
  }

  async getInfo(userId: number) {
    const user = await this.prisma.userCandidate.findUnique({
      where: { id: userId },
      include: { Address: true },
    });
    if (!user) {
      throw new ConflictException('Usuário não encontrado');
    }
    return {
      user,
    };
  }


   async update(userId: number, userDTO: UpdateUserDTO) {
      const user = await this.prisma.userCandidate.findFirst({ where: { id: userId } });
  
      if (!user) {
        throw new ConflictException('Usuário não encontrado para este usuário');
      }
  
      let hashedPassword: string | undefined;


      if (userDTO.newPassword) {

        if (!userDTO.currentPassword) {
              throw new ConflictException('Senha atual não enviada')
           }

        const comparedPassword = await bcrypt.compare(userDTO.currentPassword, user.password)

        if (!comparedPassword) {
            throw new ConflictException('Senha atual incorreta')
           }

         hashedPassword = await bcrypt.hash(userDTO.newPassword, 10)
      }

       const data: any = {};
          if (userDTO.phone) data.phone = userDTO.phone;
          if (userDTO.disablePerson) data.disablePerson = userDTO.disablePerson;
          if (userDTO.gender) data.gender = userDTO.gender;
          if (hashedPassword) data.password = hashedPassword;
          if (userDTO.address) {
            data.Address = {
              upsert: {
                create: userDTO.address,
                update: userDTO.address,
              }
            }
        }

         return this.prisma.userCandidate.update({
            where: { id: userId },
            data,
            include: { Address: true },
          });



    
    }

  async updatePhoto(userId: number, photoUrl: string) {
    return this.prisma.userCandidate.update({
      where: { id: userId },
      data: { photoUrl },
    });
  }

  async delete(userId: number){

    const findUser = await this.prisma.userCandidate.findUnique({
      where: { id: userId },
    });

    if (!findUser) {
      throw new ConflictException('Usuário não encontrado');
    }

    return this.prisma.userCandidate.delete({
      where: { id: findUser.id },
    });
  }
}
