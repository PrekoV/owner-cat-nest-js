import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerEntity } from './owner.entity';

@Controller('owner')
export class OwnerController {
    constructor(private service: OwnerService) { }

    @Get()
    getOwners(@Param() params) {
        return this.service.getOwners(params).then(res => {

            return res;
        });
    }

    @Post()
    createOwner(@Body() owner: OwnerEntity) {
        return this.service.updateOwner(owner);
    }
}
