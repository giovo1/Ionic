import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsItem } from '../../models/newsItem';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {

  news: NewsItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = navParams.get('news');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

  openURL(urlString: string){
    let browser = new InAppBrowser();
    browser.create(urlString, '_system', 'location=yes');
  }

}
