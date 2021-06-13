import { Body, Controller, Post, UsePipes } from '@nestjs/common';

//---- Service
import { CommonService } from './common.service';

//---- Pipe
import { JoiValidatorPipe } from '../utils/validator/validator.pipe';

//---- DTO
import { SupportDTO, vSupportDto } from './dto/aboutUsDto';

//---- Common
import { apiResponse } from '../app/interface/apiResponse';
import { SmailService } from '../providers/smail/smail.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('/')
export class CommonController {
      constructor(private readonly smailService: SmailService) {}
      counter = 0;

      @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
      handleCron() {
            this.counter = 0;
      }

      @Post('/support')
      @UsePipes(new JoiValidatorPipe(vSupportDto))
      async cSupport(@Body() body: SupportDTO) {
            if (this.counter <= 2) {
                  this.counter += 1;
                  // await this.smailService.sendMail(process.env.MY_EMAIL, `Name: ${body.name} - Email: ${body.email} - Body: ${body.message}`);
            }

            return apiResponse.send({ details: { message: { type: 'message.thank-you-feedback' } } });
      }
}
