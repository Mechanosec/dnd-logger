import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataParsersModule } from './data-parsers/data-parsers.module';
import { RacesModule } from './races/races.module';
import { ClassesModule } from './classes/classes.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    DataParsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    RacesModule,
    ClassesModule,
    HeroesModule,
  ],
})
export class AppModule {}
