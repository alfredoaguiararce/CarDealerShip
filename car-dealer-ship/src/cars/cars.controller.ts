import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService:CarsService
    ){}

    /* A decorator that is telling the controller to respond to a GET request to the /cars endpoint. */
    @Get()
    GetAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    GetCarById( @Param('id', ParseIntPipe) id: number){
        console.log("🚀 ~ file: cars.controller.ts ~ line 15 ~ CarsController ~ GetCarById ~ id", id)
        return this.carsService.findById(id);
    }
}
