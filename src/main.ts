import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  /**
   * Hybrid application (HTTP + GRPC)
   * Switch to basic microservice with NestFactory.createMicroservice():
   *
   * const app = await NestFactory.createMicroservice(ApplicationModule, {
   *  transport: Transport.GRPC,
   *  options: {
   *    package: 'hero',
   *    protoPath: join(__dirname, './hero/hero.proto'),
   *  }
   * });
   * await app.listenAsync();
   *
   */
  const app = await NestFactory.createMicroservice(ApplicationModule, grpcClientOptions);
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
