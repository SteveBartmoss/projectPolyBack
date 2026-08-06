import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHealth(): string {
    return `Sever up: hummm OK`
  }
  
}
