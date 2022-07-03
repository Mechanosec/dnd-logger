import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import RacesRepository from './races.repository';
import RacesGetSchema from './schemas/rases-get.schema';

@Controller('races')
export class RacesController {
  constructor(private racesRepository: RacesRepository) {}

  @Get()
  async get(@Query() racesGetSchema: RacesGetSchema) {
    try {
      const racesEntity = await this.racesRepository.getByName(
        racesGetSchema.name,
      );

      return racesEntity;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
