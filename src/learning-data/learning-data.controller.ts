import { Controller, Get, Param, Query } from '@nestjs/common';
import { LearningDataService } from './learning-data.service';

@Controller('learning-data')
export class LearningDataController {
  constructor(private readonly learningDataService: LearningDataService) {}

  @Get(':topic')
  getLeanringData(@Param('topic') topic : string) : any{
 return this.learningDataService.getLearningData(topic)
  }
}
