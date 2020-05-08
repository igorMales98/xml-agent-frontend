import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {Message} from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getReservedCustomers(agentId: string) {
    return this.httpClient.get<User[]>('http://localhost:8082/api/message/getReservedCustomers/'+agentId);
  }

  getMessages(agentId: string, customerId: string) {
    return this.httpClient.get<Message[]>('http://localhost:8082/api/message/getMessages/'+agentId +'/'+customerId);
  }

  sendMessage(message: Message) {
    return this.httpClient.post('http://localhost:8082/api/message/sendMessage', message);
  }
}
