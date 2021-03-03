import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';
import { Tags } from './Tags';

@Index('tagId', ['tagId'], {})
@Entity('TechTag', { schema: 'blog' })
export class TechTag {
  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('int', { primary: true, name: 'postId' })
  postId: number;

  @Column('int', { primary: true, name: 'tagId' })
  tagId: number;

  @ManyToOne(() => Posts, (posts) => posts.techTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'postId', referencedColumnName: 'id' }])
  post: Posts;

  @ManyToOne(() => Tags, (tags) => tags.techTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tagId', referencedColumnName: 'id' }])
  tag: Tags;
}
