import { Module, Scope } from '@nestjs/common';
import { HeroController } from './hero.controller';
import * as uuid from 'uuid/v4';

@Module({
  controllers: [HeroController],
  providers: [{
      provide: 'REQUEST_ID',
      useFactory: uuid,
      scope: Scope.REQUEST
  }]
})
export class HeroModule {}
