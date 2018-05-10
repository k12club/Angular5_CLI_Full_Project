import { Component, OnInit } from '@angular/core';
import { MarketApiService } from '../../service/market-api.service';
import { listChanges } from 'angularfire2/database';
import { Calculate } from '../model/calculate';


@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
    currencies:any[] = [];
    calculate:Calculate={
      crypto1:"BTC",
      crypto2:"ETH",
      amount:1,
      
    };

    total:number=0;
    constructor(public marketApiService:MarketApiService) {
    this.marketApiService.getcurrencies().subscribe((list:any) => {
      console.log(list.data);
      let ojb = list.data;
      // let arr = Object.keys(ojb);
    
      let arr = Object.keys(ojb).map((index) => ojb[index]);

      console.log("array",arr);
      // arr.forEach(item=>{
        
      //   let ob = {label:item};
      //   this.currencies.push(ob);
        
      // })
      this.currencies=arr;
      console.log(this.currencies);
      //this.currencies = arr;
      
    })
   }

   Calculater(cal:Calculate){
    //console.log(cal);

    let crypto1:any = this.currencies.filter(ob => ob.symbol == cal.crypto1).pop();
    console.log(crypto1.quotes.USD.price);
    let price1 = crypto1.quotes.USD.price;

    let crypto2:any = this.currencies.filter(ob => ob.symbol == cal.crypto2).pop();
    console.log(crypto2.quotes.USD.price);
    let price2 = crypto2.quotes.USD.price;

    let sum0 = price1/price2;
    console.log(sum0);

    let net:number = sum0*cal.amount;
    this.total = net;

    console.log(net);
    
    


    

 
   }
  
  ngOnInit() {
  }

}
