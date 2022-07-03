import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import ClassesEntity from './classes.entity';
import ClassesRepository from './classes.repository';
import ClassCreateSchema from './schemas/class-create.schema';

@Injectable()
export default class ClassesService {
  constructor(private classesRepository: ClassesRepository) {}

  async save(
    entityManager: EntityManager,
    classCreateSchema: ClassCreateSchema,
  ) {
    const classEntity = await this.classesRepository.getByIdOrCreate(
      classCreateSchema.id,
    );
    classEntity.id = classCreateSchema.id;
    classEntity.name = classCreateSchema.name;
    classEntity.englishName = classCreateSchema.englishName;
    classEntity.icon = classCreateSchema.icon;
    classEntity.bookShort = classCreateSchema.bookShort;
    classEntity.hitDice = classCreateSchema.hitDice;

    return entityManager.save(ClassesEntity, classEntity);
  }
}
