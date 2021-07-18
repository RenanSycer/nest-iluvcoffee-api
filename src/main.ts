import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //only allows data ensured on dtos on POST request,
      forbidNonWhitelisted: true, //stop a request when the data wasnt allowed on whitelist(dto)
    }),
  ); //instaled 2 pkg  yarn add class-validot class-transformer
  await app.listen(3000);
}
bootstrap();
