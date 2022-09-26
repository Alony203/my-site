import { Body, Controller, Get } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { TranslatorInputType, TranslatorOutputType } from './translator.controller.types';

@Controller('Translator')
export class TranslatorController {
  constructor(private readonly translatorService: TranslatorService) {}

  @Get()
  translate(@Body() input: TranslatorInputType): TranslatorOutputType {
    return this.translatorService.translate(input);
  }
}
