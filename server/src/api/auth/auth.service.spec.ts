import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AuthService (login)', () => {
  let service: AuthService;
  let jwtService: JwtService;
  const prisma = {
    userCandidate: { findUnique: jest.fn() },
    userCompany: { findUnique: jest.fn() },
  };

  const PASSWORD = 'senha-correta';
  const passwordHash = bcrypt.hashSync(PASSWORD, 4);

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({ secret: 'test-secret' })],
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('logs in a candidate with correct credentials and returns a valid token', async () => {
    prisma.userCandidate.findUnique.mockResolvedValue({
      id: 1,
      email: 'candidato@teste.com',
      password: passwordHash,
    });

    const result = await service.login({
      email: 'candidato@teste.com',
      password: PASSWORD,
    });

    expect(result.userType).toBe('candidate');
    expect(result.userId).toBe(1);
    expect(typeof result.accessToken).toBe('string');

    const payload = jwtService.decode(result.accessToken) as Record<
      string,
      unknown
    >;
    expect(payload).toMatchObject({
      sub: 1,
      email: 'candidato@teste.com',
      role: 'candidate',
    });
  });

  it('falls back to the company table when no candidate matches the email', async () => {
    prisma.userCandidate.findUnique.mockResolvedValue(null);
    prisma.userCompany.findUnique.mockResolvedValue({
      id: 7,
      email: 'empresa@teste.com',
      password: passwordHash,
    });

    const result = await service.login({
      email: 'empresa@teste.com',
      password: PASSWORD,
    });

    expect(result.userType).toBe('company');
    expect(result.userId).toBe(7);
  });

  it('rejects a wrong password', async () => {
    prisma.userCandidate.findUnique.mockResolvedValue({
      id: 1,
      email: 'candidato@teste.com',
      password: passwordHash,
    });

    await expect(
      service.login({ email: 'candidato@teste.com', password: 'errada' }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it('rejects an email that matches neither table', async () => {
    prisma.userCandidate.findUnique.mockResolvedValue(null);
    prisma.userCompany.findUnique.mockResolvedValue(null);

    await expect(
      service.login({ email: 'ninguem@teste.com', password: PASSWORD }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
