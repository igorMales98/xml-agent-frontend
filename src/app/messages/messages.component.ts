import {Component, OnInit} from '@angular/core';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
import {MessagesService} from './messages.service';
import {User} from '../model/user';
import {Message} from '../model/message';

// TODO: scroll i refresh
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  faUser = faUserCircle;
  customers: User[] = [];
  messages: Message[] = [];
  clickedCustomer: User;
  agentId = '2';
  show: boolean;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.getReservedCustomers(this.agentId).subscribe(data => {
      this.customers = data;
    });
  }

  showMessages(customer: User) {
    this.messagesService.getMessages(this.agentId, customer.id).subscribe(data => {
      this.messages = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.messages.length; i++) {
        this.messages[i].messageDate = this.formatDate(this.messages[i].messageDate);
        // tslint:disable-next-line:triple-equals
        if (this.messages[i].sender.id == this.agentId) {
          this.messages[i].type = 'agent';
        } else {
          this.messages[i].type = 'customer';
        }
      }
      this.clickedCustomer = customer;
      (document.getElementById('newMessage') as HTMLInputElement).value = '';
    });
  }

  sendMessage() {
    const body = (document.getElementById('newMessage') as HTMLInputElement).value;
    const message = new Message(body, this.clickedCustomer);
    this.messagesService.sendMessage(message).subscribe(() => {
        this.showMessages(this.clickedCustomer);
      }
    );
  }

  formatDate(oldDate: string) {
    let newDate;
    newDate = (+oldDate[3] < 10 ? ('0' + oldDate[3]) : oldDate[3]) + ':' + (+oldDate[4] < 10 ? ('0' + oldDate[4]) : oldDate[4]) + ' '
      + oldDate[2] + '.' + oldDate[1] + '.' + oldDate[0];
    return newDate;
  }
}
