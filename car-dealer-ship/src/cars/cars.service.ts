import { Injectable } from '@nestjs/common';

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
            id: 1,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 1,
            brand: 'Jeep',
            model: 'Cherokee'
        },
        {
            id: 1,
            brand: 'Nissan',
            model: 'Tsuru'
        }
    ];

    public findAll(){
        return this.cars;
    }

    public findById(id: number){
        return this.cars[id];
    }


}
