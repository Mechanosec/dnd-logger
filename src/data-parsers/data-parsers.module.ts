import { Module } from '@nestjs/common';
import { DataParsersController } from './data-parsers.controller';
import { DataParsersService } from './data-parsers.service';

@Module({
  controllers: [DataParsersController],
  providers: [DataParsersService]
})
export class DataParsersModule {}
