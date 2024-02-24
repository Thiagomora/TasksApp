import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //habilitamos cors
  app.setGlobalPrefix('api'); //definimos el prefijo de la api
  app.useGlobalPipes(new ValidationPipe()); //validamos los datos que llegan al servidor
  await app.listen(3000);
}
bootstrap();
