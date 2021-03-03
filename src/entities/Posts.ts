import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TechTag } from './TechTag';

@Entity('posts', { schema: 'blog' })
export class Posts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;

  @Column('varchar', { name: 'title', length: 40 })
  title: string;

  @Column('varchar', { name: 'img', nullable: true, length: 200 })
  img: string | null;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => TechTag, (techTag) => techTag.post)
  techTags: TechTag[];
}
