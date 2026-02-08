import { Test, TestingModule } from '@nestjs/testing';
import { TabDetailsService } from './tab-details.service';

describe('TabDetailsService', () => {
  let service: TabDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabDetailsService],
    }).compile();

    service = module.get<TabDetailsService>(TabDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
