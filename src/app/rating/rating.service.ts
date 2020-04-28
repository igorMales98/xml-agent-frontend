import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Comment} from '../model/comment'

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getComments() {
    return this.httpClient.get<Comment[]>('http://localhost:8082/api/comment/getAll/'+1);
  }
  getAgent() {
    return this.httpClient.get<Comment>('http://localhost:8082/api/agent/getAgentByAd/{1}');
  }
  sendReply(comment: Comment) {
    return this.httpClient.post('http://localhost:8082/api/comment/sendReply', comment);
  }

}
