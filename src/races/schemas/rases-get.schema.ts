import { IsOptional, IsString } from 'class-validator';

export default class RacesGetSchema {
  @IsString()
  @IsOptional()
  name: string;
}
