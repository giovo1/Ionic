import { BrowserModule } from '@angular/platform-browser';
import { DatabaseProvider } from '../providers/database/database';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NytimesNewsServiceProvider } from '../providers/nytimes-news-service';
import { NewsDbProvider } from '../providers/news-db/news-db';
import { SQLite } from '@ionic-native/sqlite'


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NytimesNewsServiceProvider,
    SQLite,
    DatabaseProvider,
    NewsDbProvider
  ]
})
export class AppModule {}
