import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Inject, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable({scope: Scope.REQUEST})
export class TestInterceptor implements NestInterceptor {
  constructor(
    @Inject('TEST') private readonly requestInfo: string,
  ) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //This line should be printed but it is not!!
    console.log(this.requestInfo);
    return next.handle();
  }
}
