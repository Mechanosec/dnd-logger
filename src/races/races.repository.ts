import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import RacesEntity from './races.entity';

@Injectable()
export default class RacesRepository {
  async getByIdOrCreate(id: number): Promise<RacesEntity> {
    const raceEntity = await getRepository(RacesEntity)
      .createQueryBuilder('r')
      .where('r.id = :id', {
        id: id,
      })
      .getOne();

    if (!raceEntity) {
      return new RacesEntity();
    }

    return raceEntity;
  }

  async getByName(name = ''): Promise<RacesEntity[]> {
    return getRepository(RacesEntity)
      .createQueryBuilder('r')
      .where('r.name LIKE :name', {
        name: `%${name}%`,
      })
      .orWhere('r.english_name LIKE :englishName', {
        englishName: `%${name}%`,
      })
      .getMany();
  }
}
