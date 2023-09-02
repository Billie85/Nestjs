//serviceはコントローラで深い関数とかを書いた時に分けたかったらここに書くのかな？
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}