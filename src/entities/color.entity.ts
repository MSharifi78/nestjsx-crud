import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Car_Entity } from './car.entity';

@Entity()
export class Color_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Car_Entity, car => car.color)
  car: Car_Entity;
}
