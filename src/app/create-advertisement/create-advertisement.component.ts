import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {CreateAdvertisementService} from './create-advertisement.service';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';
import {FuelType} from '../model/fuelType';
import {TransmissionType} from '../model/transmissionType';
import {CarClass} from '../model/carClass';
import {ModalDismissReasons, NgbDatepickerConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pricelist} from '../model/pricelist';
import {DatePipe} from '@angular/common';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAdvertisementComponent implements OnInit {

  isBrandDropdownInvalid = true;
  isModelDropdownInvalid = true;
  isFuelTypeDropDownInvalid = true;
  isTransmissionTypeDropdownInvalid = true;
  isClassDropdownInvalid = true;
  isPriceListNotSelected = true;

  allCarBrands: CarBrand[] = [];
  allCarBrandModels: CarModel[] = [];
  allFuelTypes: FuelType[] = [];
  allTransmissionTypes: TransmissionType[] = [];
  allCarClasses: CarClass[] = [];
  allPricelists: Pricelist[] = [];

  isCarBrandSelected = false;
  isPricelistSelected = false;

  selectedCarBrand = 'Select car brand';
  selectedCarModel = 'Select car model';
  selectedFuelType = 'Select fuel type';
  selectedTransmissionType = 'Select transmission type';
  selectedCarClass = 'Select car class';
  selectedPricelist = 'Select price list';

  tempPricelist: Pricelist;
  finalPricelist: Pricelist;

  closeResult: string;
  advertisementForm: FormGroup;

  todayDate: any;
  minDate = undefined;
  minDate2 = undefined;
  selectedStartDate: string;
  selectedEndDate: string;

  public imagePath;
  imgURLS: any[] = [];
  public message: string;

  faCalendar = faCalendar;

  constructor(private router: Router, private createAdvertisementService: CreateAdvertisementService, private modalService: NgbModal,
              private formBuilder: FormBuilder, private datePipe: DatePipe, private config: NgbDatepickerConfig) {
    this.todayDate = new Date();
    this.minDate = {
      year: this.todayDate.getFullYear(),
      month: this.todayDate.getMonth() + 1,
      day: this.todayDate.getDate() + 1
    };
    this.minDate2 = {
      year: this.todayDate.getFullYear(),
      month: this.todayDate.getMonth() + 1,
      day: this.todayDate.getDate() + 2
    };
  }

  get adFb() {
    return this.advertisementForm.controls;
  }

  ngOnInit(): void {
    this.advertisementForm = this.formBuilder.group({
      mileage: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(1),
        Validators.maxLength(10), Validators.min(0)]],
      childSeats: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.max(5), Validators.min(0)]]
    });

    this.createAdvertisementService.getAllCarBrands().subscribe(data => {
      this.allCarBrands = data;
    });
    this.createAdvertisementService.getAllFuelTypes().subscribe(data => {
      this.allFuelTypes = data;
    });
    this.createAdvertisementService.getAllTransmissionTypes().subscribe(data => {
      this.allTransmissionTypes = data;
    });
    this.createAdvertisementService.getAllCarClasses().subscribe(data => {
      this.allCarClasses = data;
    });
    this.createAdvertisementService.getAllPricelists().subscribe(data => {
      this.allPricelists = data;
    });
  }

  getBrandModels(carBrand: CarBrand) {
    if (carBrand.name !== this.selectedCarBrand) {
      this.createAdvertisementService.getCarBrandModels(carBrand.id).subscribe(data => {
        this.allCarBrandModels = data;

        this.isBrandDropdownInvalid = false;
        this.isCarBrandSelected = true;
        this.selectedCarBrand = carBrand.name;
        this.selectedCarModel = 'Select car model';
        this.isModelDropdownInvalid = true;
      });
    }
  }


  selectModel(carModel: CarModel) {
    this.selectedCarModel = carModel.name;
    this.isModelDropdownInvalid = false;
  }

  selectFuelType(fuelType: FuelType) {
    this.selectedFuelType = fuelType.name;
    this.isFuelTypeDropDownInvalid = false;
  }

  selectTransmissionType(transmissionType: TransmissionType) {
    this.selectedTransmissionType = transmissionType.name;
    this.isTransmissionTypeDropdownInvalid = false;
  }

  selectCarClass(carClass: CarClass) {
    this.selectedCarClass = carClass.name;
    this.isClassDropdownInvalid = false;
  }

  openPriceListsModal(myModalPriceList: TemplateRef<any>) {
    this.modalService.open(myModalPriceList, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  selectPricelist(pricelist: Pricelist) {
    this.isPricelistSelected = true;
    this.tempPricelist = pricelist;
    console.log(pricelist);
  }

  confirmSelection() {
    this.finalPricelist = this.tempPricelist;
    this.selectedPricelist = this.finalPricelist.pricePerDay + ' $ per day';
    this.isPriceListNotSelected = false;
    this.modalService.dismissAll();
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURLS.push(reader.result);
    };
  }

  selectStartDate() {
    console.log(this.selectedStartDate);

    const datee = moment(this.selectedStartDate).format('YYYY-MM-DD');
    console.log('dateeee' + datee);
    this.minDate2 = {
      year: new Date(datee).getFullYear(),
      month: new Date(datee).getMonth(),
      day: new Date(datee).getDate() + 1
    };

    this.selectedEndDate = undefined;

  }

  selectEndDate() {
    console.log(this.selectedEndDate);
  }


}
