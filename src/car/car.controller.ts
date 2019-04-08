import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CarService } from './car.service';
import { Car_Entity } from 'src/entities/car.entity';

@Crud(Car_Entity)
@Controller('car')
export class CarController {
  constructor(public service: CarService) {}
}
