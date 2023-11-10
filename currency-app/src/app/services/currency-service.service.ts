import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  private apiKey = environment.apiKey;
  private apiURL = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/UAH`;


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    return this.http.get<any>(this.apiURL)
  
  }
}
