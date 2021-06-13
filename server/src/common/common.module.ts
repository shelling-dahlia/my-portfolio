import { Module } from '@nestjs/common';

//---- Service
import { CommonService } from './common.service';

//---- Controller
import { CommonController } from './common.controller';

//---- Provider
import { SmailModule } from '../providers/smail/smail.module';

@Module({
      imports: [SmailModule],
      controllers: [CommonController],
      providers: [CommonService],
})
export class CommonModule {}
