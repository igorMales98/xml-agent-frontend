import {Component, OnInit} from '@angular/core';
import {CreateAdvertisementService} from './create-advertisement.service';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  isBrandDropdownInvalid = true;
  isModelDropdownInvalid = true;

  allCarBrands: CarBrand[] = [];
  allCarBrandModels: CarModel[] = [];

  isCarBrandSelected = false;

  selectedCarBrand = 'Select car brand';
  selectedCarModel = 'Select car model';

  constructor(private router: Router, private createAdvertisementService: CreateAdvertisementService) {
  }

  ngOnInit(): void {
    this.createAdvertisementService.getAllCarBrands().subscribe(data => {
      this.allCarBrands = data;
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
}
