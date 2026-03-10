import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { PrismaModule } from 'src/api/prisma/prisma.module';
import { AddressController } from './address.controller';

@Module({
  imports: [PrismaModule],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
