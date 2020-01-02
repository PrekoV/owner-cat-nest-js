import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { OwnerController } from './owner/owner.controller';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(), OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
