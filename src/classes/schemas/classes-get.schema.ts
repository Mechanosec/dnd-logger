import { IsOptional, IsString } from 'class-validator';

export default class ClassesGetSchema {
  @IsString()
  @IsOptional()
  name: string;
}
