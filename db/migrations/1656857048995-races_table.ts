import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class racesTable1656857048995 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'races',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'english_name',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'book_short',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'icon',
            type: 'text',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('races');
  }
}
