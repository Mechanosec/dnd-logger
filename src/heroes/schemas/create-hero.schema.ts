import { IsInt, IsString } from 'class-validator';

export default class CreateHeroSchema {
  @IsString()
  playerName: string;

  @IsString()
  characterName: string;

  @IsString()
  class: string;

  @IsString()
  race: string;

  @IsInt()
  level: number;

  @IsInt()
  experiencePoints: number;

  @IsString()
  background: string;

  @IsString()
  alignment: string;
}
