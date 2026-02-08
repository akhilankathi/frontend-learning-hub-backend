import { Controller } from '@nestjs/common';
import { TabDetailsService } from './tab-details.service';
import { Get } from '@nestjs/common';

@Controller('tab-details')
export class TabDetailsController {
  constructor(private readonly tabDetailsService: TabDetailsService) {}

  @Get()
  getTabDetails(): any{
   return this.tabDetailsService.getTabDetails()
  }
}
