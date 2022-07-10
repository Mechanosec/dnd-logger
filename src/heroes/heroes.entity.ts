import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('heroes')
export default class HeroesEntity {
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @Column({ name: 'player_name', type: 'varchar', length: '100' })
  playerName: string;

  @Column({ name: 'character_name', type: 'varchar', length: '100' })
  characterName: string;

  @Column({ name: 'class', type: 'varchar', length: '100' })
  class: string;

  @Column({ name: 'race', type: 'varchar', length: '100' })
  race: string;

  @Column({ name: 'level', type: 'int' })
  level: number;

  @Column({ name: 'experience_points', type: 'int' })
  experiencePoints: number;

  @Column({ name: 'background', type: 'varchar', length: '100' })
  background: string;

  @Column({ name: 'alignment', type: 'varchar', length: '100' })
  alignment: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
