import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

Error.stackTraceLimit = Infinity;

const envFilePath = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
const logger = new Logger('bootstrap');
logger.log(`Application is running in ${process.env.NODE_ENV} mode`);

dotenv.config({ path: envFilePath });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
