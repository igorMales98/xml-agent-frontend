import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../model/user'


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getReservedCustomers(agentId: number) {
    return this.httpClient.get<User[]>('http://localhost:8082/api/Messages/getReservedCustomers/'+agentId);
  }


}
