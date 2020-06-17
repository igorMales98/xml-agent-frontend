import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from '../model/advertisement';
import {Comment} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAdvertisements(agentId: string) {
    return this.httpClient.get<Advertisement[]>('http://localhost:8082/api/advertisement/' + agentId);
  }

  getAdvertisementPhotos(adId: string) {
    return this.httpClient.get('http://localhost:8082/api/advertisement/photos/' + adId);
  }

  getComments(adId: string) {
    return this.httpClient.get<Comment[]>('http://localhost:8082/api/comment/' + adId);
  }

  sendReply(comment: Comment) {
    return this.httpClient.post('http://localhost:8082/api/comment/reply', comment);
  }

}
