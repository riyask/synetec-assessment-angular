import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(
        private _httpClient: HttpClient,
        private _injector: Injector
    ) {
        super(_httpClient, _injector);
    }

    //To get all cities
    getAllCities(): Observable<any> {
        const url = `${this.getBaseUrl()}api/cities`;
        return this._httpClient
            .get(url, this.getRequestHeaders());
    }

    //To delete a city
    deleteCity(cityId: number): Observable<any> {
        const url = `${this.getBaseUrl()}api/cities/delete-city/${cityId}`;
        return this._httpClient
            .delete(url, this.getRequestHeaders());
    }
}