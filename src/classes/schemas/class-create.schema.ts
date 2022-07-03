import { IsInt, IsString, Min } from 'class-validator';

export default class ClassCreateSchema {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  name: string;

  @IsString()
  englishName: string;

  @IsString()
  icon: string;

  @IsString()
  bookShort: string;

  @IsString()
  hitDice: string;
}
