import {Advertisement} from './advertisement';
import { RentRequest } from './rentRequest';
import { Car } from './car';

export class Report{
  id : string;
  car : Car;
  km : number;
  additionalInformation : string;

  constructor(car : Car, km : number, additionalInformation : string){
    this.car = car;
    this.km = km;
    this.additionalInformation = additionalInformation;
  }
}
