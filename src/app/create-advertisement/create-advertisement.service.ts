import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';
import {FuelType} from '../model/fuelType';
import {TransmissionType} from '../model/transmissionType';
import {CarClass} from '../model/carClass';
import {Pricelist} from '../model/pricelist';

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

  getAllFuelTypes() {
    return this.httpClient.get<FuelType[]>('http://localhost:8082/api/fuel-type/getAll');
  }

  getAllTransmissionTypes() {
    return this.httpClient.get<TransmissionType[]>('http://localhost:8082/api/transmission-type/getAll');
  }

  getAllCarClasses() {
    return this.httpClient.get<CarClass[]>('http://localhost:8082/api/car-class/getAll');
  }

  getAllPricelists() {
    return this.httpClient.get<Pricelist[]>('http://localhost:8082/api/pricelist/getAll');
  }

}
