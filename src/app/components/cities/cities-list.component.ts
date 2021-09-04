import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: [ './cities-list.component.css' ]
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];

    constructor(
        private _citiesService: CitiesService
    ) { }

    ngOnInit(): void {
        this.getAllCities();
    }

    getAllCities() {
        this._citiesService.getAllCities().subscribe(citiesList => {
            this.cities = citiesList;
        });
    }

    deleteCity(cityId: number) {
        this._citiesService.deleteCity(cityId).subscribe(repsonse => {
            this.getAllCities();
        });
    }
}