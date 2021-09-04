import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { Observable } from "rxjs";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) { }

    getAllCities(): Observable<ICity[]> {
        return this._citiesEndpoint.getAllCities() as Observable<ICity[]>;
    }

    deleteCity(cityId: number): Observable<any> {
        return this._citiesEndpoint.deleteCity(cityId) as Observable<any>;
    }
}