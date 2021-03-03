import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}
  getHello() {
    return 'Jerky Code API Server';
  }
}
