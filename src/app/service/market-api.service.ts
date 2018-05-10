import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Calculate } from '../pages/model/calculate';

let key = "3f54efbe4547baf8dac092002d685b81";
let root = "https://api.coinmarketcap.com/v2/ticker/";
let headers = new HttpHeaders();
headers = headers.set('Content-Type','application/json').set('Access-Control-Allow-Origin','*')
.set('authorization', 'Bearer ' + "token");

@Injectable()
export class MarketApiService {

  constructor(private http:HttpClient) { }


  getcurrency(){
    return this.http.get(root);
  }
  getcurrencies(){
    return this.http.get('https://api.coinmarketcap.com/v2/ticker/');
  }
  calculateAPI(cal:Calculate){
    return this.http.get('https://www.cryptonator.com/rates/convert/?amount'+cal.amount+'&primary='+cal.crypto1+'&secondary='+cal.crypto2);
     
                
  }
}

