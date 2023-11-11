  import { Component, OnInit } from '@angular/core';
  import { CurrencyServiceService } from '../services/currency-service.service';
  import { forkJoin } from 'rxjs';

  @Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
  })
  export class BodyComponent implements OnInit {

    constructor(private apiService: CurrencyServiceService){}

    inputValue!: number;
    currencyFrom!: string;
    currencyTo!: string;
    currenciesDataUAH!: Record<string, number>;
    currenciesDataEUR!: Record<string, number>;
    currenciesDataUSD!: Record<string, number>;
    convertedValue!: number;

    ngOnInit(): void {

      const dataUAH$ = this.apiService.getDataUAH();
      const dataEUR$ = this.apiService.getDataEUR();
      const dataUSD$ = this.apiService.getDataUSD();
    
      forkJoin([dataUAH$, dataEUR$, dataUSD$]).subscribe(
        ([dataUAH, dataEUR, dataUSD]) => {
          this.currenciesDataUAH = dataUAH['conversion_rates'];
          this.currenciesDataEUR = dataEUR['conversion_rates'];
          this.currenciesDataUSD = dataUSD['conversion_rates'];
          console.log(this.currenciesDataUAH);
          console.log(this.currenciesDataEUR);
          console.log(this.currenciesDataUSD);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
      
    }

 
      convertCurrency() {
        if (
          this.inputValue &&
          this.currencyFrom &&
          this.currencyTo &&
          this.currenciesDataUAH &&
          this.currenciesDataEUR &&
          this.currenciesDataUSD
        ) {
          let exchangeRate: number;
      
          switch (this.currencyFrom) {
            case 'UAH':
              exchangeRate = this.currenciesDataUAH[this.currencyTo];
              break;
            case 'EUR':
              exchangeRate = this.currenciesDataEUR[this.currencyTo];
              break;
            case 'USD':
              exchangeRate = this.currenciesDataUSD[this.currencyTo];
              break;
            default:
              console.log(`Unknown currency: ${this.currencyFrom}`);
              return;
          }
      
          this.convertedValue = this.inputValue * exchangeRate;
        } else {
          console.log('Invalid input values or data not available yet');
        }
      }
      
      
        
      
    }



