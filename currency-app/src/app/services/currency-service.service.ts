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
  private apiURL2 = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/EUR`
  private apiURL3 = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/USD`


  constructor(private http: HttpClient) { }

  getDataUAH(): Observable<any> {

    return this.http.get<any>(this.apiURL)
  
  }

  getDataEUR(): Observable<any> {

    return this.http.get<any>(this.apiURL2)
  
  }

  getDataUSD(): Observable<any> {

    return this.http.get<any>(this.apiURL3)
  
  }


}
