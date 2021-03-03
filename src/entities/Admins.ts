import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('name', ['name'], { unique: true })
@Entity('admins', { schema: 'blog' })
export class Admins {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 40 })
  name: string;

  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
