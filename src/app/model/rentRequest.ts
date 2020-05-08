import {User} from './user';
import {Advertisement} from './advertisement';
import {Report} from './report';

export class RentRequest {
  id: string;
  reservedFrom: string;
  reservedTo: string;
  customer: User;
  advertisementsForRent: Advertisement[] = [];
  reports: Report[] = [];

  constructor(reservedFrom: string, reservedTo: string, customer: User, advertisementsForRent: Advertisement[]) {
    this.reservedFrom = reservedFrom;
    this.reservedTo = reservedTo;
    this.customer = customer;
    this.advertisementsForRent = advertisementsForRent;
  }
}
