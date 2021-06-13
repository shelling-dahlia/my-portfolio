import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

//--------- Service
import { AppService } from './app.service';

//---------Module
import { CommonModule } from './common/common.module';

//---------Provider
import { SmailModule } from './providers/smail/smail.module';

//---------Utils
import { LoggerModule } from './utils/logger/logger.module';

//---------Entity

const Config = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/.env.${process.env.NODE_ENV}`,
});

@Module({
      imports: [
            // --- Config
            Config,
            ScheduleModule.forRoot(),

            // --- Module

            CommonModule,

            // --- Provider
            SmailModule,

            // --- Utils
            LoggerModule,
      ],
      providers: [AppService],
      controllers: [],
})
export class AppModule {}
