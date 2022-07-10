import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import HeroesEntity from '../heroes.entity';

@Exclude()
export default class HeroResponse {
  @ApiProperty()
  @Expose()
  guid: string;

  @ApiProperty()
  @Expose()
  playerName: string;

  @ApiProperty()
  @Expose()
  characterName: string;

  @ApiProperty()
  @Expose()
  class: string;

  @ApiProperty()
  @Expose()
  race: string;

  @ApiProperty()
  @Expose()
  level: number;

  @ApiProperty()
  @Expose()
  experiencePoints: number;

  @ApiProperty()
  @Expose()
  background: string;

  @ApiProperty()
  @Expose()
  alignment: string;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;

  @ApiProperty()
  @Expose()
  deletedAt: Date;

  constructor(hero: HeroesEntity) {
    Object.assign(this, hero);
  }
}
