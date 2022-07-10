import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import HeroesEntity from './heroes.entity';

@Injectable()
export default class HeroesRepository {
  async getList(): Promise<HeroesEntity[]> {
    return getRepository(HeroesEntity).createQueryBuilder('h').getMany();
  }

  async getByGuid(guid: string): Promise<HeroesEntity> {
    const hero = await getRepository(HeroesEntity)
      .createQueryBuilder('h')
      .where('h.guid = :guid', {
        guid: guid,
      })
      .getOne();

    if (!hero) {
      throw new Error(`Could not find hero by guid ${guid}`);
    }

    return hero;
  }

  async getByPlayerNameOrCharacterName(name: string): Promise<HeroesEntity> {
    const hero = await getRepository(HeroesEntity)
      .createQueryBuilder('h')
      .where('h.player_name LIKE :name', {
        name: `%${name}%`,
      })
      .orWhere('h.character_name LIKE :name', {
        name: `%${name}%`,
      })
      .getOne();

    if (!hero) {
      throw new Error('Could not find hero');
    }

    return hero;
  }
}
