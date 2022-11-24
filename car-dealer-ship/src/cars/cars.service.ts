import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    
    private cars = 
    [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
        {
            id: 4,
            brand: 'Nissan',
            model: 'Tsuru'
        }
    ];

    public findAll(){
        return this.cars;
    }

    public findById(id: number){
        let car = this.cars.find(x => x.id == id);
        
        /* Throwing an exception if the car is not found. */
        if(!car) throw new NotFoundException(`Not found car with id : ${id} `);

        return this.cars[id];
    }


}
