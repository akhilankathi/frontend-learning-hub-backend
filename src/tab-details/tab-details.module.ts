import { Module } from '@nestjs/common';
import { TabDetailsService } from './tab-details.service';
import { TabDetailsController } from './tab-details.controller';

@Module({
  controllers: [TabDetailsController],
  providers: [TabDetailsService],
})
export class TabDetailsModule {}
