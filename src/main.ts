import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    "origin": "*",
    "methods": "GET,POST,OPTIONS,PUT,DELETE",
    "allowedHeaders": "X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method,token,authorization,x-access-token,Authorization, Accept,X-Requested-With,content-type",
    "credentials": true
  });
  await app.listen(3000);
}
bootstrap();
