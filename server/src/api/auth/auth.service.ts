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

    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.email,
      userType,
    );

    return {
      accessToken,
      refreshToken,
      userType,
      userId: user.id,
    };
  }

  private async generateTokens(
    sub: number,
    email: string,
    role: 'candidate' | 'company' | null,
  ) {
    const accessToken = await this.jwtService.signAsync(
      { sub, email, role, type: 'access' },
      { secret: process.env.JWT_SECRET, expiresIn: '4h' },
    );

    const refreshToken = await this.jwtService.signAsync(
      { sub, email, role, type: 'refresh' },
      { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' },
    );

    return { accessToken, refreshToken };
  }

  async login(dto: { email: string; password: string }) {
    return this.validateUser(dto.email, dto.password);
  }

  async refreshTokens(refreshToken: string) {
    let payload: any;
    try {
      payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
    } catch {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }

    if (payload.type !== 'refresh') {
      throw new UnauthorizedException('Token informado não é um refresh token');
    }

    const user =
      payload.role === 'company'
        ? await this.prisma.userCompany.findUnique({
            where: { id: payload.sub },
          })
        : await this.prisma.userCandidate.findUnique({
            where: { id: payload.sub },
          });

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const tokens = await this.generateTokens(user.id, user.email, payload.role);

    return {
      ...tokens,
      userType: payload.role,
      userId: user.id,
    };
  }
}
