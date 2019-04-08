import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { ColorModule } from './color/color.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CarModule, ColorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
