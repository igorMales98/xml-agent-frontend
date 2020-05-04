import {User} from './user';
import {Car} from './car';
import {Pricelist} from './pricelist';

export class Advertisement {
  id: string;
  availableFrom: Date;
  availableTo: Date;
  advertiser: User;
  car: Car;
  pricelist: Pricelist;
  currentRate: number;

  // helper for image
  image: any[] = [];
}
