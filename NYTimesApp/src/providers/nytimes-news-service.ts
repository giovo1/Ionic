//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the NytimesNewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NytimesNewsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello NytimesNewsServiceProvider Provider');
  }


  getNews(searchQuery: String){

    return this.http
    .get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0bf4b3a0da1f4087903e092866bd2ac1&sort=newest&q='+ searchQuery)
    .map(res => res.json(),
        err => {
          console.log(err);
        }
      )
  }
}

