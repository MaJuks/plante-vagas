import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (!apiKey || typeof apiKey !== 'string') {
      throw new UnauthorizedException('API key ausente (header x-api-key)');
    }

    const empresa = await this.prisma.userCompany.findUnique({
      where: { chaveIntegracao: apiKey },
    });

    if (!empresa) {
      throw new UnauthorizedException('API key inválida');
    }

    request.empresaId = empresa.id;
    return true;
  }
}
