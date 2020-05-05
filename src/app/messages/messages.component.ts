import { Component, OnInit } from '@angular/core';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
import { MessagesService } from './messages.service';
import { User } from '../model/user';
//TODO: dodati fiksnu velicinu divova sa scrollom
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  faUser = faUserCircle;
  agent: User;
  customers: User[];
  chats = [
    {"firstName": "Mira",
     "lastName": "Miric" 
    },
    {"firstName": "Mare",
     "lastName": "Maric" 
    },
    {"firstName": "Aca",
     "lastName": "Acic" 
    }
  ];
  messages = [
    {"text": "Mira", 
     "type": "customer"
    },
    {"text": "tekkkkkkkst", 
    "type": "customer"
    },
    {"text": "blablabla",
    "type": "agent" 
    },
    {"text": "blablabla", 
    "type": "customer"
    },
    {"text": "blablabla", 
    "type": "agent"
    },
    {"text": "blablabla", 
    "type": "customer"
    }
  ];
  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getReservedCustomers(this.agent.id).subscribe(data => {
      this.customers = data
    });
  }

}
