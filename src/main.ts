import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": "*",
    "methods": ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE'],
    "allowedHeaders": [
      'X-API-KEY', 
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Access-Control-Request-Method',
      'token',
      'authorization',
      'x-access-token',
      'Authorization',
      'X-Requested-With',
      'content-type'
    ]
  });
  await app.listen(3000);
}
bootstrap();
