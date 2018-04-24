import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }
getQuote():Promise<any>{
  return new Promise((resolve, reject ) => {
  this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', 
     
              {
                headers: { }
              })
              .subscribe( (res) => {
                console.log(res);
  let quote = res[0]['content'];
      console.log(quote);
      resolve(this.formatQuote(quote));
              })


});
  
}
formatQuote(quote:string):string{
    
      console.log(quote.substr(3).slice(0,-5));
      
    return quote.substr(3).slice(0,-5);
}
}
