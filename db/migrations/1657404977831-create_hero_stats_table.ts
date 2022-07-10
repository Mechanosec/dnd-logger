import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createHeroStatsTable1657404977831 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hero_stats',
        columns: [
          {
            name: 'strength',
            type: 'int',
          },
          {
            name: 'dexterity',
            type: 'int',
          },
          {
            name: 'constitution',
            type: 'int',
          },
          {
            name: 'intelligence',
            type: 'int',
          },
          {
            name: 'wisdom',
            type: 'int',
          },
          {
            name: 'charisma',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            length: '0',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            length: '0',
            default: 'NOW()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            length: '0',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hero_stats');
  }
}
