import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color_Entity } from 'src/entities/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color_Entity])],
  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule {}
