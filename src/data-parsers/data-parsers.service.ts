import { BadRequestException, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import ClassDto from './dtos/class.dto';
import { plainToClass } from 'class-transformer';
import RaceDto from './dtos/race.dto';

@Injectable()
export class DataParsersService {
  private baseUrl = 'https://dnd5.club/data';

  private transformToClass<T extends ClassDto | RaceDto>(
    classTransformer: { new (): T },
    response: AxiosResponse,
  ): T[] {
    const filterResponse = response.data.data.filter(
      (classData: T) =>
        classData.bookshort === 'PHB' || classData.bookshort === 'DMG',
    );
    return plainToClass<T, object[]>(classTransformer, filterResponse, {
      excludeExtraneousValues: true,
    });
  }

  async getClasses(): Promise<ClassDto[]> {
    const params =
      'columns%5B0%5D.data=name&' +
      'columns%5B0%5D.searchable=true&' +
      'columns%5B0%5D.orderable=true&' +
      'columns%5B0%5D.search.value=&' +
      'order%5B0%5D.column=0&' +
      'order%5B0%5D.dir=asc&';

    try {
      const response = await axios.get(this.baseUrl + '/classes?' + params);
      return this.transformToClass(ClassDto, response);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async getRaces(): Promise<RaceDto[]> {
    const params =
      'columns%5B0%5D.data=name' +
      '&columns%5B0%5D.name=' +
      '&columns%5B0%5D.searchable=true' +
      '&columns%5B0%5D.orderable=true' +
      '&columns%5B0%5D.search.value=' +
      '&columns%5B0%5D.search.regex=false' +
      '&columns%5B1%5D.data=englishName' +
      '&columns%5B1%5D.name=' +
      '&columns%5B1%5D.searchable=true' +
      '&columns%5B1%5D.orderable=true' +
      '&columns%5B1%5D.search.value=' +
      '&columns%5B1%5D.search.regex=false' +
      '&columns%5B2%5D.data=ability' +
      '&columns%5B2%5D.name=' +
      '&columns%5B2%5D.searchable=false' +
      '&columns%5B2%5D.orderable=true' +
      '&columns%5B2%5D.search.value=' +
      '&columns%5B2%5D.search.regex=false' +
      '&columns%5B3%5D.data=bookshort' +
      '&columns%5B3%5D.name=' +
      '&columns%5B3%5D.searchable=false' +
      '&columns%5B3%5D.orderable=true' +
      '&columns%5B3%5D.search.value=PHB' +
      '&columns%5B3%5D.search.regex=true' +
      '&order%5B0%5D.column=0' +
      '&order%5B0%5D.dir=asc' +
      '&search.value=';

    try {
      const response = await axios.get(this.baseUrl + '/classes?' + params);

      return this.transformToClass(RaceDto, response);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
