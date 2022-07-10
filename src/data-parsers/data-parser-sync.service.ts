import { BadRequestException, Injectable } from '@nestjs/common';
import RaceCreateSchema from '../races/schemas/race-create.schema';
import { EntityManager, getManager } from 'typeorm';
import { DataParsersService } from './data-parsers.service';
import RaceDto from './dtos/race.dto';
import { validateSync } from '../tools/validator';
import RaceEntity from '../races/races.entity';
import ClassDto from './dtos/class.dto';
import ClassCreateSchema from '../classes/schemas/class-create.schema';
import RacesService from '../races/races.service';
import ClassesService from '../classes/classes.service';

@Injectable()
export default class DataParsersSyncService {
  constructor(
    private dataParsersService: DataParsersService,
    private racesService: RacesService,
    private classesService: ClassesService,
  ) {}

  async syncRaces() {
    const races = await this.dataParsersService.getRaces();

    await getManager().transaction(async (entityManager: EntityManager) => {
      const promises: Promise<RaceEntity>[] = races.map((raceDto: RaceDto) => {
        const raceSchema = new RaceCreateSchema();
        raceSchema.id = raceDto.id;
        raceSchema.name = raceDto.name;
        raceSchema.englishName = raceDto.englishName;
        raceSchema.icon = raceDto.icon;
        raceSchema.bookShort = raceDto.bookshort;

        const errValidates: string = validateSync(raceSchema);
        if (errValidates) {
          throw new BadRequestException(errValidates);
        }

        return this.racesService.save(entityManager, raceSchema);
      });

      await Promise.all(promises);
    });
  }

  async syncClasses() {
    const classes = await this.dataParsersService.getClasses();
    await getManager().transaction(async (entityManager: EntityManager) => {
      const promises: Promise<RaceEntity>[] = classes.map(
        (classDto: ClassDto) => {
          const classSchema = new ClassCreateSchema();
          classSchema.id = classDto.id;
          classSchema.name = classDto.name;
          classSchema.englishName = classDto.englishName;
          classSchema.icon = classDto.icon;
          classSchema.bookShort = classDto.bookshort;
          classSchema.hitDice = classDto.hitDice;

          const errValidates: string = validateSync(classSchema);
          if (errValidates) {
            throw new BadRequestException(errValidates);
          }

          return this.classesService.save(entityManager, classSchema);
        },
      );

      await Promise.all(promises);
    });
  }
}
