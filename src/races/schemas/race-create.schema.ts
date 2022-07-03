import { IsInt, IsString, Min } from 'class-validator';

export default class RaceCreateSchema {
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
}
