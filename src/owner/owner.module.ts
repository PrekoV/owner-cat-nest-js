import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './owner.entity';
import { OwnerController } from './owner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity])],
  providers: [OwnerService],
  controllers: [OwnerController],
})
export class OwnerModule {}
