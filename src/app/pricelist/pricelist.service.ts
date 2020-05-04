import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pricelist } from '../model/pricelist';

@Injectable({
    providedIn: 'root'
})
export class PricelistService {
    
    constructor(private httpClient: HttpClient) {
    }

    createPricelist(newPrice: Pricelist) {
        return this.httpClient.post('http://localhost:8082/api/pricelist/addPricelist', newPrice);
    }

    getAllPricelists() {
        return this.httpClient.get<Pricelist[]>('http://localhost:8082/api/pricelist/getAll');
    }

    deletePricelist(id: number) {
        return this.httpClient.delete('http://localhost:8082/api/pricelist/deletePricelist/' + id);
    }

    editPricelist(editedPricelist: Pricelist){
        return this.httpClient.put('http://localhost:8082/api/pricelist/editPricelist', editedPricelist);
    }
}