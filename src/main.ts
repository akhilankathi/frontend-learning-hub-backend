import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.enableCors({
    origin: [
      'https://automatic-palm-tree-67p7wr954qv35wqg-5173.app.github.dev',
      'https://frontendlearninghub.netlify.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, 
  });
  

  const config = new DocumentBuilder()
    .setTitle('Frontend Learning Hub')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('Endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    useGlobalPrefix: false,
  },);

  await app.listen(3000);
}

bootstrap();

