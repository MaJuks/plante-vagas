import { Injectable } from '@nestjs/common';
import CreateAddressDTO from './dto/create-address-dto';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createAddress(createAddress: CreateAddressDTO) {
    console.log('inf do cadastro de endereco', createAddress);
    return this.prisma.address.create({
      data: createAddress,
    });
  }

  async findAll(skip = 0, filters?: Prisma.AddressWhereInput) {
    return this.prisma.address.findMany({
      skip,

      where: filters,
    });
  }
}
