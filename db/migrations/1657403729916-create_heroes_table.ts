import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createHeroesTable1657403729916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'heroes',
        columns: [
          {
            name: 'guid',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'player_name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'character_name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'class',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'race',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'level',
            type: 'int',
          },
          {
            name: 'experience_points',
            type: 'int',
          },
          {
            name: 'background',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'alignment',
            type: 'varchar',
            length: '100',
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
    await queryRunner.dropTable('heroes');
  }
}
