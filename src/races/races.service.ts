import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import RacesEntity from './races.entity';
import RacesRepository from './races.repository';
import RaceCreateSchema from './schemas/race-create.schema';

@Injectable()
export default class RacesService {
  constructor(private racesRepository: RacesRepository) {}

  async save(
    entityManager: EntityManager,
    raceCreateSchema: RaceCreateSchema,
  ): Promise<RacesEntity> {
    const raceEntity = await this.racesRepository.getByIdOrCreate(
      raceCreateSchema.id,
    );
    raceEntity.id = raceCreateSchema.id;
    raceEntity.name = raceCreateSchema.name;
    raceEntity.englishName = raceCreateSchema.englishName;
    raceEntity.icon = raceCreateSchema.icon;
    raceEntity.bookShort = raceCreateSchema.bookShort;

    return entityManager.save(RacesEntity, raceEntity);
  }
}
