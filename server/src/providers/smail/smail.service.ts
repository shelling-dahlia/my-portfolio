import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MailService, MailDataRequired } from '@sendgrid/mail';

//----- Service
import { LoggerService } from '../../utils/logger/logger.service';

@Injectable()
export class SmailService {
      constructor(private readonly mailService: MailService, private readonly LoggerService: LoggerService) {}

      sendMail(receiver: string, content: string) {
            const msg: MailDataRequired = {
                  to: receiver,
                  from: process.env.SENDGIRD_MAIL,
                  subject: 'Some one want to contact',
                  html: `
                         ${content}
                         `,
                  mailSettings: {
                        sandboxMode: {
                              enable: process.env.NODE_ENV === 'test' || process.env.DOC === 'active',
                        },
                  },
            };
            return this.mailService
                  .send(msg)
                  .then((msg) => {
                        return true;
                  })
                  .catch((error) => {
                        this.LoggerService.print(error, 'smail.service.ts', 'error');

                        return false;
                  });
      }
}
