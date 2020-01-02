import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsEntity } from './cats.entity';
import { CatsController } from './cats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CatsEntity])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule { }
