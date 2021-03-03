import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'ec2-3-34-198-5.ap-northeast-2.compute.amazonaws.com', // 향후 수정
      port: 3306,
      username: 'jerkyb',
      password: 'whrjsdn32',
      database: 'blog',
      entities: ['dist/entities/*.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
