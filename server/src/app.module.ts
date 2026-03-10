import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { PrismaModule } from './api/prisma/prisma.module';
import { AddressModule } from './api/address/address.module';
import { AuthModule } from './api/auth/auth.module';
import { CompanyModule } from './api/company/company.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AddressModule,
    AuthModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
