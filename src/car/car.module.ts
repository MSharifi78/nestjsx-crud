import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car_Entity } from 'src/entities/car.entity';
import { CarController } from './car.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car_Entity])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
