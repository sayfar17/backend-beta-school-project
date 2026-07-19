import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Validación global
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  // Filtros globales
  app.useGlobalFilters(new HttpExceptionFilter());
  
  // Interceptor de respuesta
  app.useGlobalInterceptors(new TransformInterceptor());

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('EduGestión 360 API')
    .setDescription('API para el sistema administrativo I.E. Túpac Amaru')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
void bootstrap();
