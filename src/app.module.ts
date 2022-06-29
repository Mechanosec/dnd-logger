import { Module } from '@nestjs/common';
import { DataParsersModule } from './data-parsers/data-parsers.module';

@Module({
  imports: [DataParsersModule],
})
export class AppModule {}
