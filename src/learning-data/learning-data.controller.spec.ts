import { Test, TestingModule } from '@nestjs/testing';
import { LearningDataController } from './learning-data.controller';
import { LearningDataService } from './learning-data.service';

describe('LearningDataController', () => {
  let controller: LearningDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningDataController],
      providers: [LearningDataService],
    }).compile();

    controller = module.get<LearningDataController>(LearningDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
