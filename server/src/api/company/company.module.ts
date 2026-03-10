import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
