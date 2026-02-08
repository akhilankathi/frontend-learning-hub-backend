import { Module } from '@nestjs/common';
import { LearningDataService } from './learning-data.service';
import { LearningDataController } from './learning-data.controller';

@Module({
  controllers: [LearningDataController],
  providers: [LearningDataService],
})
export class LearningDataModule {}
