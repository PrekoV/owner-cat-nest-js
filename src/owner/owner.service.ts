import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerEntity } from './owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
    constructor(@InjectRepository(OwnerEntity) private ownerRepository: Repository<OwnerEntity>) { }

    async updateOwner(owner: OwnerEntity) {
        this.ownerRepository.save(owner);
    }
    async getOwners(owner: OwnerEntity): Promise<OwnerEntity[]>  {
        return await this.ownerRepository.createQueryBuilder('owner_entity')
        .leftJoinAndSelect('owner_entity.catId', 'catId').getMany();
    }
}
