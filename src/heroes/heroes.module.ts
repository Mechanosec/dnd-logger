import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesController } from './heroes.controller';
import HeroesEntity from './heroes.entity';
import HeroesRepository from './heroes.repository';
import { HeroesService } from './heroes.service';

@Module({
  imports: [TypeOrmModule.forFeature([HeroesEntity])],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository],
})
export class HeroesModule {}
