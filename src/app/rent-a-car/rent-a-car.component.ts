import {Component, OnInit} from '@angular/core';
import {RentACarService} from './rent-a-car.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Advertisement} from '../model/advertisement';
import {DomSanitizer} from '@angular/platform-browser';
import {faCartPlus, faInfo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  customerData: FormGroup;
  startDate: string;
  endDate: string;
  minDateStart: string;
  minDateEnd: string;
  allAvailableAdvertisements: Advertisement[] = [];
  // image: string;

  image: any[] = [];
  private readonly imageType: string = 'data:image/PNG;base64,';

  allImagesForAd: string[] = [];

  faCart = faCartPlus;
  faInfo = faInfo;

  constructor(private rentACarService: RentACarService, private formBuilder: FormBuilder, private datePipe: DatePipe,
              private domSanitizer: DomSanitizer) {
    this.startDate = new Date().toISOString().slice(0, 16);
    this.endDate = new Date().toISOString().slice(0, 16);
    this.minDateStart = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
    this.minDateEnd = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
  }

  ngOnInit(): void {
    this.customerData = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, this.emailDomainValidator, Validators.pattern(/[^ @]*@[^ @]*/)]],
      country: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(9), Validators.maxLength(10)]]
    });
  }

  get fcd() {
    return this.customerData.controls;
  }

  emailDomainValidator(control: FormControl) {
    const email = control.value;
    const [name, domain] = email.split('@');
    if (domain !== 'gmail.com' && domain !== 'yahoo.com' && domain !== 'uns.ac.rs') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    } else {
      return null;
    }
  }

  startDateChange() {
    console.log(this.startDate);
    this.minDateEnd = this.datePipe.transform(new Date(this.startDate), 'yyyy-MM-ddTHH:mm:ss');
    this.endDate = this.startDate;
  }

  endDateChange() {
    console.log(this.endDate);
  }

  showAvailableCars() {
    this.rentACarService.getAllAvailableAdvertisementsInPeriod(this.startDate, this.endDate).subscribe(data => {
      this.allAvailableAdvertisements = data;

      for (const advertisement of this.allAvailableAdvertisements) {
        advertisement.image = [];
        this.rentACarService.getAdvertisementPhotos(advertisement.id).subscribe(img => {
          console.log(img as string);
          const images = img.toString();
          this.allImagesForAd = images.split(',');
          for (let i = 0; i < this.allImagesForAd.length; i++) {
            advertisement.image.push(this.domSanitizer.bypassSecurityTrustUrl(this.imageType + this.allImagesForAd[i]));
          }
        });
      }

    });
  }
}