import { Expose } from 'class-transformer';

export default class RaceDto {
  @Expose()
  name: string;

  @Expose()
  englishName: string;

  @Expose()
  icon: string;

  @Expose()
  ability: string;
}
