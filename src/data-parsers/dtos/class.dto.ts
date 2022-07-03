import { Expose } from 'class-transformer';

export default class ClassDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  englishName: string;

  @Expose()
  icon: string;

  @Expose()
  hitDice: string;

  @Expose()
  bookshort: string;
}
