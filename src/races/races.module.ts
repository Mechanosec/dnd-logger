import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RacesController } from './races.controller';
import RaceEntity from './races.entity';
import RaceRepository from './races.repository';
import RacesService from './races.service';

@Module({
  imports: [TypeOrmModule.forFeature([RaceEntity])],
  controllers: [RacesController],
  providers: [RacesService, RaceRepository],
  exports: [RacesService, RaceRepository],
})
export class RacesModule {}
