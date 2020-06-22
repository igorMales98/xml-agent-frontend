import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { RentRequest } from '../model/rentRequest';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class CreateReportService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getAllRentRequests() {
    return this.httpClient.get<RentRequest[]>('http://localhost:8082/api/rent-request/finished');
  }

  createReport(report: Report){
    return this.httpClient.post('http://localhost:8082/api/report', report);
  }
}
