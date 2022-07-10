import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ClassesRepository from './classes.repository';
import ClassesGetSchema from './schemas/classes-get.schema';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private classesRepository: ClassesRepository) {}

  @Get()
  async get(@Query() classesGetSchema: ClassesGetSchema) {
    try {
      const classesEntity = await this.classesRepository.getByName(
        classesGetSchema.name,
      );

      return classesEntity;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
