import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Car_Entity } from 'src/entities/car.entity';
import { RestfulOptions } from '@nestjsx/crud';

@Injectable()
export class CarService extends RepositoryService<Car_Entity> {
  protected options: RestfulOptions = {
    join: {
      color: {},
    },
  };
  constructor(@InjectRepository(Car_Entity) repo) {
    super(repo);
  }
}
