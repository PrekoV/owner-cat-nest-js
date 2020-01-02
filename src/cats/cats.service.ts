import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatsEntity } from './cats.entity';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(CatsEntity) private catsRepository: Repository<CatsEntity>) { }

    async updateCat(cat: CatsEntity) {
        this.catsRepository.save(cat);
    }
    async getCats(cat: CatsEntity): Promise<CatsEntity[]> {
        return await this.catsRepository.find();
    }
    async deleteCatById(id: number) {
        return await this.catsRepository.delete(id);
    }
    async updateCatById(id: number, updates: CatsEntity) {
        return await this.catsRepository.update(id, updates);
    }
}
