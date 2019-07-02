import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Inject, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as assert from 'assert';

@Injectable({scope: Scope.REQUEST})
export class TestInterceptor implements NestInterceptor {
  constructor(
    @Inject('REQUEST_ID') private readonly requestId: string
  ) {
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //This variable should be a request id, but it is undefined!!
    assert.notStrictEqual(this.requestId, undefined, 'dependency injection not working!');
    return next.handle();
  }
}
