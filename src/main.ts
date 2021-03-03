import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Jerky Code API')
    .setDescription('Created by Jeryb')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  dotenv.config();
  await app.listen(process.env.PORT || 3000);
  console.log('server listening on port ' + (process.env.PORT || 3000));
}
bootstrap();
