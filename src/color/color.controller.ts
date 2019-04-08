import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Color_Entity } from 'src/entities/color.entity';
import { ColorService } from './color.service';

@Crud(Color_Entity)
@Controller('color')
export class ColorController {
  constructor(public service: ColorService) {}
}
