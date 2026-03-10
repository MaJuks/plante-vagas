import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    let user: any = await this.prisma.userCandidate.findUnique({
      where: { email },
    });

    if (!user) {
      let user: any = await this.prisma.userCompany.findUnique({
        where: { email },
      });
    }

    let userType: 'candidate' | 'company' | null = null;

    if (user) {
      userType = 'candidate';
    } else {
      user = await this.prisma.userCompany.findUnique({ where: { email } });
      if (user) {
        userType = 'company';
      }
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    const payload = { sub: user.id, email: user.email, role: userType };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '4h',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
      userType,
      userId: user.id,
    };
  }

  async login(dto: { email: string; password: string }) {
    return this.validateUser(dto.email, dto.password);
  }
}
