import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class classesTable1656857077827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
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
            name: 'hit_dice',
            type: 'varchar',
            length: '10',
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
    await queryRunner.dropTable('classes');
  }
}
