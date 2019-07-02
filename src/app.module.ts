import { Module, Scope } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
})
export class ApplicationModule {}
