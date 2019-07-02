import { Controller, Get, OnModuleInit, UseInterceptors } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';
import { TestInterceptor } from '../test.interceptor';

interface HeroService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller()
export class HeroController{
  @UseInterceptors(TestInterceptor)
  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    const items: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    return items.find(({ id }) => id === data.id);
  }
}
