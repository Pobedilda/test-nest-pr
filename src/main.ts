import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test pr')
    .setDescription('doc for test API')
    .setVersion('1.0.0')
    .addTag('PB')
    .build()

  const documentation = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/documentation', app, documentation)

  await app.listen(5000);
}
bootstrap();
