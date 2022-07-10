import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { EntityManager, getManager } from 'typeorm';
import { ResponseTransformer } from '../utils/response-transformer';
import HeroesRepository from './heroes.repository';
import { HeroesService } from './heroes.service';
import HeroResponse from './responses/hero.response';
import CreateHeroSchema from './schemas/create-hero.schema';
import UpdateHeroSchema from './schemas/update-hero.schema';

@ApiTags('Heroes')
@Controller('heroes')
export class HeroesController {
  constructor(
    private heroesService: HeroesService,
    private heroesRepository: HeroesRepository,
  ) {}

  @ApiOkResponse({ type: () => HeroResponse, isArray: true })
  @Get()
  async getList() {
    try {
      const heroes = await this.heroesRepository.getList();
      return new ResponseTransformer(HeroResponse).items(heroes);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiParam({ name: 'guid', type: String })
  @ApiOkResponse({ type: () => HeroResponse })
  @Get('/:guid')
  async get(@Param('guid') guid: string) {
    try {
      const hero = await this.heroesRepository.getByGuid(guid);
      return new ResponseTransformer(HeroResponse).item(hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiBody({
    schema: {
      type: 'object',
      example: {
        playerName: 'test1',
        characterName: 'test2',
        class: 'test class',
        race: 'test race',
        level: 1,
        experiencePoints: 100,
        background: 'test back',
        alignment: 'test alignment',
      },
    },
  })
  @ApiOkResponse({ type: () => HeroResponse })
  @Post()
  async create(@Body() createHeroSchema: CreateHeroSchema) {
    try {
      const hero = await getManager().transaction(
        (entityManager: EntityManager) => {
          return this.heroesService.create(entityManager, createHeroSchema);
        },
      );

      return new ResponseTransformer(HeroResponse).item(hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiParam({ name: 'guid', type: String })
  @ApiBody({
    schema: {
      type: 'object',
      example: {
        playerName: 'test1',
        characterName: 'test2',
        class: 'test class',
        race: 'test race',
        level: 1,
        experiencePoints: 100,
        background: 'test back',
        alignment: 'test alignment',
      },
    },
  })
  @ApiOkResponse({ type: () => HeroResponse })
  @Put('/:guid')
  async update(
    @Param('guid') guid: string,
    @Body() updateHeroSchema: UpdateHeroSchema,
  ) {
    try {
      const hero = await getManager().transaction(
        (entityManager: EntityManager) => {
          return this.heroesService.update(
            entityManager,
            guid,
            updateHeroSchema,
          );
        },
      );

      return new ResponseTransformer(HeroResponse).item(hero);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiParam({ name: 'guid', type: String })
  @ApiOkResponse({ type: String })
  @Delete('/:guid')
  async delete(@Param('guid') guid: string) {
    try {
      await getManager().transaction((entityManager: EntityManager) => {
        return this.heroesService.delete(entityManager, guid);
      });

      return 'Hero was delete';
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
