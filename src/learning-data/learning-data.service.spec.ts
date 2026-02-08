import { Test, TestingModule } from '@nestjs/testing';
import { LearningDataService } from './learning-data.service';

describe('LearningDataService', () => {
  let service: LearningDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningDataService],
    }).compile();

    service = module.get<LearningDataService>(LearningDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
