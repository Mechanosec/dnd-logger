import { BadRequestException, Controller, Get, Post } from '@nestjs/common';
import DataParsersSyncService from './data-parser-sync.service';
import { DataParsersService } from './data-parsers.service';

@Controller('data-parsers')
export class DataParsersController {
  constructor(
    private dataParsersService: DataParsersService,
    private dataParserSyncService: DataParsersSyncService,
  ) {}

  @Get('classes')
  async getClasses() {
    try {
      return await this.dataParsersService.getClasses();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('races')
  async getRaces() {
    try {
      return await this.dataParsersService.getRaces();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('/sync-races')
  async syncRaces() {
    try {
      await this.dataParserSyncService.syncRaces();
      return 'Sync done!';
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('/sync-classes')
  async syncClasses() {
    try {
      await this.dataParserSyncService.syncClasses();
      return 'Sync done!';
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
