import { NestFactory } from '@nestjs/core';
import { TranslatorModule } from './Translator/translator.module';

async function bootstrap() {
  const app = await NestFactory.create(TranslatorModule);
  await app.listen(3000);
}
bootstrap();
