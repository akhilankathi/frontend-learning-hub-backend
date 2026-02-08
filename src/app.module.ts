import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabDetailsModule } from './tab-details/tab-details.module';
import { LearningDataModule } from './learning-data/learning-data.module';

@Module({
  imports: [TabDetailsModule, LearningDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
