import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NytimesNewsServiceProvider } from '../../providers/nytimes-news-service';
import { NewsItem } from '../../models/newsItem';
import { NewsDbProvider } from '../../providers/news-db/news-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: String;
  jsonObj: any[] = [];

  newsList: NewsItem [];
  urlImages: String = 'http://www.nytimes.com/';
  no_image: String = 'assets/imgs/no_image.png';

  constructor(
    public navCtrl: NavController, 
    public nytimesService: NytimesNewsServiceProvider,
    private newsDB: NewsDbProvider
  ) {}

  executeSearchNews(){

    console.log('Ejecuta busqueda');
    var imageXLarge: String;
    var imageWide: String;
    var imageThumbnail: String;

    this.newsList = [];

    this.newsDB.insert(this.searchQuery);

    this.nytimesService.getNews(this.searchQuery)
    .subscribe(
      (data) => { // Success
        
        this.jsonObj = data.response.docs;

        for (var i = 0; i < this.jsonObj.length; i++) {
          imageXLarge = this.no_image;
          imageWide = this.no_image;
          imageThumbnail = this.no_image;

          for (var j = 0; j < this.jsonObj[i].multimedia.length; j++) {
            if (this.jsonObj[i].multimedia[j].type === 'image' && this.jsonObj[i].multimedia[j].subtype === 'xlarge'){
              imageXLarge = this.urlImages + this.jsonObj[i].multimedia[j].legacy.xlarge;
            }
            if (this.jsonObj[i].multimedia[j].type === 'image' && this.jsonObj[i].multimedia[j].subtype === 'wide'){
              imageWide = this.urlImages + this.jsonObj[i].multimedia[j].legacy.wide;
            }
            if (this.jsonObj[i].multimedia[j].type === 'image' && this.jsonObj[i].multimedia[j].subtype === 'thumbnail'){
              imageThumbnail = this.urlImages + this.jsonObj[i].multimedia[j].legacy.thumbnail;
            }
          }

          this.newsList.push( new NewsItem(this.jsonObj[i].headline.main, 
                                           this.jsonObj[i].snippet, 
                                           this.jsonObj[i].source, 
                                           this.jsonObj[i].pub_date,
                                           this.jsonObj[i].web_url, 
                                           imageXLarge, 
                                           imageWide, 
                                           imageThumbnail));
 
        }
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToNewsDetail(news: NewsItem){
    this.navCtrl.push('NewsDetailPage',{'news': news});
  }

}
