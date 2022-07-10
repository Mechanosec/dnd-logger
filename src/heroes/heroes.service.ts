import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import HeroesEntity from './heroes.entity';
import HeroesRepository from './heroes.repository';
import CreateHeroSchema from './schemas/create-hero.schema';
import UpdateHeroSchema from './schemas/update-hero.schema';

@Injectable()
export class HeroesService {
  constructor(private heroesRepository: HeroesRepository) {}

  async create(
    entityManager: EntityManager,
    createHeroSchema: CreateHeroSchema,
  ): Promise<HeroesEntity> {
    const hero = entityManager.create(HeroesEntity, createHeroSchema);
    return await entityManager.save(hero);
  }

  async update(
    entityManager: EntityManager,
    guid: string,
    updateHeroSchema: UpdateHeroSchema,
  ): Promise<HeroesEntity> {
    const hero = await this.heroesRepository.getByGuid(guid);
    hero.playerName = updateHeroSchema.playerName;
    hero.characterName = updateHeroSchema.characterName;
    hero.class = updateHeroSchema.class;
    hero.race = updateHeroSchema.race;
    hero.level = updateHeroSchema.level;
    hero.experiencePoints = updateHeroSchema.experiencePoints;
    hero.background = updateHeroSchema.background;
    hero.alignment = updateHeroSchema.alignment;

    return await entityManager.save(hero);
  }

  async delete(entityManager: EntityManager, guid: string) {
    const hero = await this.heroesRepository.getByGuid(guid);
    hero.deletedAt = new Date();
    await entityManager.save(hero);
  }
}
