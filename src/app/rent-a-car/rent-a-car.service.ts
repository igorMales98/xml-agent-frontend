import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from '../model/advertisement';
import {RentRequest} from '../model/rentRequest';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAvailableAdvertisementsInPeriod(dateFrom: string, dateTo: string) {
    return this.httpClient.get<Advertisement[]>('http://localhost:8082/api/advertisement/getInPeriod/' + dateFrom + '/' + dateTo);
  }

  getAdvertisementPhotos(id: string) {
    return this.httpClient.get('http://localhost:8082/api/advertisement/getAdvertisementsPhotos/' + id);
  }

  createRentRequest(rentRequest: RentRequest) {
    return this.httpClient.post('http://localhost:8082/api/rent-request', rentRequest);
  }

}
