import { Test, TestingModule } from '@nestjs/testing';
import { CurriculumController } from './curriculum.controller';
import { CurriculumService } from './curriculum.service';
import { PrismaService } from '../prisma/prisma.service';
import { createPrismaMock } from '../../../test/support/prisma-mock';

describe('CurriculumController', () => {
  let controller: CurriculumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurriculumController],
      providers: [
        CurriculumService,
        { provide: PrismaService, useValue: createPrismaMock() },
      ],
    }).compile();

    controller = module.get<CurriculumController>(CurriculumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
