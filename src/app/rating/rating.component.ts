import { Component, OnInit, TemplateRef} from '@angular/core';
import {faComments, faUser} from '@fortawesome/free-regular-svg-icons';
import {Comment} from '../model/comment'
import {ModalDismissReasons,NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 2rem;
      color: #b0c4de;
    }
    .full {
      color: #1e90ff;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: #1e90ff;
    }
    .modal-header {
      border-bottom: 0 none;
    } 
    .modal-footer {
        border-top: 0 none;
    }
  `]
})
export class RatingComponent implements OnInit {

  currentRate = 2.5;
  faComment = faComments;
  faUser = faUser;
  closeResult = null;
  clickedAuthor: string;
  comments: Comment[] = [
    {
      "author": "Douglas  Pace",
      "text": "Text...",
      "reply": null
    },
    {
      "author": "Mcleod  Mueller",
      "text": "Text...",
      "reply": null
    },
    {
      "author": "Day  Meyers",
      "text": "Text...",
      "reply": null
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(content: TemplateRef<any>, author: string) {  
    this.clickedAuthor = author;   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  sendReply() {
    for (let i=0; i<this.comments.length; i++) {        
      if (this.comments[i].author == this.clickedAuthor) {
        this.comments[i].reply = (document.getElementById('replyComment') as HTMLInputElement).value;
      }
    }
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
