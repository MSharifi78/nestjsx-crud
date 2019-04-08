import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Color_Entity } from './color.entity';

@Entity()
export class Car_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Color_Entity, color => color.car)
  color: Color_Entity;
}
