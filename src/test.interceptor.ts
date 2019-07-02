import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Inject, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as assert from 'assert';

@Injectable({scope: Scope.REQUEST})
export class TestInterceptor implements NestInterceptor {
  constructor(
    @Inject('TEST') private readonly requestInfo: string,
  ) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //This variable should be 'test' but it is not!!
    assert.equal(this.requestInfo, 'test', 'dependency injection not working!');
    return next.handle();
  }
}
