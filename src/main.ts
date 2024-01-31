import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('api');

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.info(`server running on ${await app.getUrl()}`);

  return app;
}
void bootstrap();