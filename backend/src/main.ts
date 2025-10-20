import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ เปิด CORS ให้ frontend ที่ localhost:3001 เข้าถึงได้
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(3000);
  console.log('🚀 Backend running on http://localhost:3000');
}
bootstrap();
