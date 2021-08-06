import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDB } from '../../database/response.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getOffersData() {
    return this.http.get<ResponseDB>('assets/database/productDB.json').pipe(
      map((resp) => {
        return [...resp.offers];
      })
    );
  }

  getSponsorshipData() {
    return this.http.get<ResponseDB>('assets/database/productDB.json').pipe(
      map((resp) => {
        return [...resp.sponsorship];
      })
    );
  }
}
