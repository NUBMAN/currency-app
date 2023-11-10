import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../services/currency-service.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private apiService: CurrencyServiceService){}
    apiData: any


  ngOnInit(){
    this.apiService.getData().subscribe( (data) =>
      this.apiData = data
      
    )
  }
  

}
