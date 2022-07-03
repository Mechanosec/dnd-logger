import { Module } from '@nestjs/common';
import { ClassesModule } from '../classes/classes.module';
import { RacesModule } from '../races/races.module';
import DataParsersSyncService from './data-parser-sync.service';
import { DataParsersController } from './data-parsers.controller';
import { DataParsersService } from './data-parsers.service';

@Module({
  imports: [RacesModule, ClassesModule],
  controllers: [DataParsersController],
  providers: [DataParsersService, DataParsersSyncService],
})
export class DataParsersModule {}
