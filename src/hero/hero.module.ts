import { Module, Scope } from '@nestjs/common';
import { HeroController } from './hero.controller';

@Module({
  controllers: [HeroController],
  providers: [{
      provide: 'TEST',
      useValue: 'test',
      scope: Scope.REQUEST
  }]
})
export class HeroModule {}
