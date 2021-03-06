import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarBrand} from '../model/carBrand';
import {Router} from '@angular/router';
import {CarModel} from '../model/carModel';
import {FuelType} from '../model/fuelType';
import {TransmissionType} from '../model/transmissionType';
import {CarClass} from '../model/carClass';
import {Pricelist} from '../model/pricelist';
import {CreateAdvertisements} from '../model/createAdvertisements';

@Injectable({
  providedIn: 'root'
})
export class CreateAdvertisementService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getAllCarBrands() {
    return this.httpClient.get<CarBrand[]>('http://localhost:8082/api/car-brand');
  }

  getCarBrandModels(id: string) {
    return this.httpClient.get<CarModel[]>('http://localhost:8082/api/car-model/' + id);
  }

  getAllFuelTypes() {
    return this.httpClient.get<FuelType[]>('http://localhost:8082/api/fuel-type');
  }

  getAllTransmissionTypes() {
    return this.httpClient.get<TransmissionType[]>('http://localhost:8082/api/transmission-type');
  }

  getAllCarClasses() {
    return this.httpClient.get<CarClass[]>('http://localhost:8082/api/car-class');
  }

  getAllPricelists() {
    return this.httpClient.get<Pricelist[]>('http://localhost:8082/api/pricelist');
  }

  createAdvertisement(selectedFiles, createAdvertisement: CreateAdvertisements) {

    return this.httpClient.post('http://localhost:8082/api/advertisement', createAdvertisement).subscribe(data => {
      const uploadData = new FormData();

      for (let blob of selectedFiles) {
        uploadData.append('myFile', blob, blob.name);
      }

      this.httpClient.post('http://localhost:8082/api/advertisement/uploadPhotos/' + data, uploadData).subscribe();

    });
  }

}
