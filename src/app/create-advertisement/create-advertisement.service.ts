import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';

@Injectable({
  providedIn: 'root'
})
export class CreateAdvertisementService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getAllCarBrands() {
    return this.httpClient.get<CarBrand[]>('http://localhost:8082/api/car-brand/getAll');
  }

  getCarBrandModels(id: string) {
    return this.httpClient.get<CarModel[]>('http://localhost:8082/api/car-model/getBrandModels/' + id);
  }

}
