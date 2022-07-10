import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import RacesEntity from './races.entity';
import RacesRepository from './races.repository';
import RacesGetSchema from './schemas/rases-get.schema';

@ApiTags('Races')
@Controller('races')
export class RacesController {
  constructor(private racesRepository: RacesRepository) {}

  @ApiOkResponse({ type: () => RacesEntity })
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
