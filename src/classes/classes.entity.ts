import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('classes')
export default class ClassesEntity {
  @PrimaryColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: '200' })
  public name: string;

  @Column({ name: 'english_name', type: 'varchar', length: '200' })
  public englishName: string;

  @Column({ name: 'icon', type: 'text' })
  icon: string;

  @Column({ name: 'book_short', type: 'varchar', length: '10' })
  bookShort: string;

  @Column({ name: 'hit_dice', type: 'varchar', length: '10' })
  hitDice: string;
}
