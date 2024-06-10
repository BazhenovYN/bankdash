import { TrpcModule } from '@api/trpc/trpc.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
