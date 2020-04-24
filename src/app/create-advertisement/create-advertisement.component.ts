import {Component, OnInit} from '@angular/core';
import {CreateAdvertisementService} from './create-advertisement.service';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  allCarBrands: CarBrand[] = [];

  constructor(private router: Router, private createAdvertisementService: CreateAdvertisementService) {
  }

  ngOnInit(): void {
    this.createAdvertisementService.getAllCarBrands().subscribe(data => {
      this.allCarBrands = data;
    });
  }

}
