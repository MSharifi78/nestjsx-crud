import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Color_Entity } from 'src/entities/color.entity';
import { RestfulOptions } from '@nestjsx/crud';

@Injectable()
export class ColorService extends RepositoryService<Color_Entity> {
  constructor(@InjectRepository(Color_Entity) repo) {
    super(repo);
  }
}
