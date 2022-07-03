import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import ClassesEntity from './classes.entity';

@Injectable()
export default class ClassesRepository {
  async getByIdOrCreate(id: number): Promise<ClassesEntity> {
    const classEntity = await getRepository(ClassesEntity)
      .createQueryBuilder('c')
      .where('c.id = :id', {
        id: id,
      })
      .getOne();

    if (!classEntity) {
      return new ClassesEntity();
    }

    return classEntity;
  }

  async getByName(name: string): Promise<ClassesEntity[]> {
    return getRepository(ClassesEntity)
      .createQueryBuilder('c')
      .where('c.name LIKE :name', {
        name: `%${name}%`,
      })
      .orWhere('r.english_name LIKE :englishName', {
        englishName: `%${name}%`,
      })
      .getMany();
  }
}
