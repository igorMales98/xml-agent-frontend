import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private httpClient: HttpClient) {
  }

  getCarsForRatingStatistics() {
    return this.httpClient.get<Car[]>('http://localhost:8082/api/car');
  }

  getTimesRentedForACar(id: string) {
    return this.httpClient.get<number>('http://localhost:8082/api/advertisement/timesRented/' + id);
  }

  getRentMileageForACar(id: string) {
    return this.httpClient.get<number>('http://localhost:8082/api/report/rentMileage/' + id);
  }
}
