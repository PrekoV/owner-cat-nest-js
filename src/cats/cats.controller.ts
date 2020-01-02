import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CatsEntity } from './cats.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private service: CatsService) { }

    @Get()
    getCats(@Param() params) {
        return this.service.getCats(params);
    }

    @Post()
    createCat(@Body() cat: CatsEntity) {
        return this.service.updateCat(cat);
    }

    @Delete(':id')
    deleteCatById(@Param('id') id) {
        return this.service.deleteCatById(id).then(res => {
            return ({message: 'delete successfully'});
        }).catch(e => {
            return {message: 'Error request', detail: e};
        });
    }

    @Put(':id')
        updateCat(@Param('id') id, @Body() body) {
            return this.service.updateCatById(id, body).then(res => {
                return (res);
            }).catch(e => {
                return {message: 'Error request', detail: e};
            });
    }
}
