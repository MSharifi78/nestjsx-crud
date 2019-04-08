import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as ResponseType } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Response() res: ResponseType): void {}
}
