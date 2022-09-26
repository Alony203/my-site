import { Module } from '@nestjs/common';
import { TranslatorController } from './translator.controller';
import { TranslatorService } from './translator.service';

@Module({
  imports: [],
  controllers: [TranslatorController],
  providers: [TranslatorService],
})
export class TranslatorModule {}
