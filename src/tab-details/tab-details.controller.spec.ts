import { Test, TestingModule } from '@nestjs/testing';
import { TabDetailsController } from './tab-details.controller';
import { TabDetailsService } from './tab-details.service';

describe('TabDetailsController', () => {
  let controller: TabDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabDetailsController],
      providers: [TabDetailsService],
    }).compile();

    controller = module.get<TabDetailsController>(TabDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
