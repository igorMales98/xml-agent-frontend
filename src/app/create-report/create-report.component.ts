import {Component, OnInit, TemplateRef} from '@angular/core';
import {RentRequest} from '../model/rentRequest';
import {CreateReportService} from './create-report.service';
import {NotifierService} from 'angular-notifier';
import {Advertisement} from '../model/advertisement';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Report} from '../model/report';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  allRentRequests: RentRequest[] = [];
  notifier: NotifierService;
  advertisement: Advertisement;
  closeResult: string;
  rentRequest: RentRequest;
  km: number;
  additionalInformation: string;

  constructor(private createReportService: CreateReportService, private modalService: NgbModal, private router: Router, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.createReportService.getAllRentRequests().subscribe(data => {
      this.allRentRequests = data;
    });

  }

  openMoreInfoModal(myModalMoreInfo: TemplateRef<any>, advertisement1: Advertisement, request: RentRequest) {
    this.rentRequest = request;
    this.advertisement = advertisement1;
    this.modalService.open(myModalMoreInfo, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      windowClass: 'myCustomModalClass'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  createReport() {
    const report = new Report(this.advertisement.car, this.km, this.additionalInformation, this.rentRequest);

    this.createReportService.createReport(report).subscribe(data => {
      this.showNotification('success', 'Successfully created report.');
    });

    this.modalService.dismissAll();
    this.router.navigate(['/homePage']);
  }

}
