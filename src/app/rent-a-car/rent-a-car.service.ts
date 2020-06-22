import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from '../model/advertisement';
import {RentRequest} from '../model/rentRequest';
import {Comment} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAvailableAdvertisementsInPeriod(dateFrom: string, dateTo: string) {
    return this.httpClient.get<Advertisement[]>('http://localhost:8082/api/advertisement/inPeriod/' + dateFrom + '/' + dateTo);
  }

  getAdvertisementPhotos(id: string) {
    return this.httpClient.get('http://localhost:8082/api/advertisement/photos/' + id);
  }

  createRentRequest(rentRequest: RentRequest) {
    return this.httpClient.post('http://localhost:8082/api/rent-request', rentRequest);
  }

  getComments(adId: string) {
    return this.httpClient.get<Comment[]>('http://localhost:8082/api/comment/' + adId);
  }
}
