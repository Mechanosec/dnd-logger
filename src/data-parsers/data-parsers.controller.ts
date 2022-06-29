import { Controller, Get } from '@nestjs/common';
import { DataParsersService } from './data-parsers.service';

@Controller('data-parsers')
export class DataParsersController {
  constructor(private dataParsersService: DataParsersService) {}

  @Get('classes')
  async getClasses() {
    try {
      return await this.dataParsersService.getClasses();
    } catch (e) {
      console.error(e);
    }
  }

  @Get('races')
  async getRaces() {
    try {
      return await this.dataParsersService.getRaces();
    } catch (e) {
      console.error(e);
    }
  }
}
