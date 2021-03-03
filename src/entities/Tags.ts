import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TechTag } from './TechTag';

@Index('title', ['title'], { unique: true })
@Entity('tags', { schema: 'blog' })
export class Tags {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 15 })
  title: string;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => TechTag, (techTag) => techTag.tag)
  techTags: TechTag[];
}
