import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('races')
export default class RacesEntity {
  @PrimaryColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: '200' })
  name: string;

  @Column({ name: 'english_name', type: 'varchar', length: '200' })
  englishName: string;

  @Column({ name: 'icon', type: 'text' })
  icon: string;

  @Column({ name: 'book_short', type: 'varchar', length: '10' })
  bookShort: string;
}
