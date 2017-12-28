import { Component, ViewChild } from '@angular/core';
import { NewsDbProvider } from '../providers/news-db/news-db';
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) navCtrl: Nav;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private dbProvider: DatabaseProvider,
    private newsDB: NewsDbProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      dbProvider.createDatabase();
    });
  }

  showSearchHistoric(){

    var newsHistoric: string = '';

    this.newsDB.getAll()
    .then((result: any[]) => {
      for (var i = 0; i < result.length; i++) {
        newsHistoric = newsHistoric + '<li>'+ result[i] + '</li>';
      }

      newsHistoric = '<ul>' + newsHistoric + '</ul>';

      let alert = this.alertCtrl.create({
        title: 'Ultimas Búsquedas',
        message: newsHistoric,
        buttons: ['Ok']
      });
      alert.present();

    })
    .catch(() => {
      console.log('Error al cargar el historico de busquedas');
    });

    this.menuCtrl.close();
  }

  clearSearch(){
    this.navCtrl.setRoot(HomePage);
    this.menuCtrl.close();
  }

}

