import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../core/models/category.model';
import { CarouselDetails, CarouselHome } from '../../core/models/carousel.model';

const URL = 'http://localhost:3000/carousel';

@Injectable({
    providedIn: 'root',
})

export class CarouselService {

    constructor(private http: HttpClient) { }

    getCarouselHome(): Observable<CarouselHome[]> {
        return this.http.get<CarouselHome[]>(URL);
    }

    getCarouselDetails(slug: String | null): Observable<CarouselDetails[]> {
        return this.http.get<CarouselDetails[]>(`${URL}/${slug}`);
    }
}