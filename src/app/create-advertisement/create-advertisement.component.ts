import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {CreateAdvertisementService} from './create-advertisement.service';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';
import {FuelType} from '../model/fuelType';
import {TransmissionType} from '../model/transmissionType';
import {CarClass} from '../model/carClass';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pricelist} from '../model/pricelist';

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

  constructor(private router: Router, private createAdvertisementService: CreateAdvertisementService, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
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

  get adFb() {
    return this.advertisementForm.controls;
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
}
