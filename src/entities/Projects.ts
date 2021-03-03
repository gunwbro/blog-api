import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects', { schema: 'blog' })
export class Projects {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 40 })
  title: string;

  @Column('varchar', { name: 'date', nullable: true, length: 40 })
  date: string | null;

  @Column('varchar', { name: 'skills', nullable: true, length: 40 })
  skills: string | null;

  @Column('varchar', { name: 'part', nullable: true, length: 40 })
  part: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 140 })
  description: string | null;

  @Column('varchar', { name: 'img', nullable: true, length: 200 })
  img: string | null;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
