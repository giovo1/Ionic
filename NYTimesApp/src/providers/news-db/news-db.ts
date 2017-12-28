import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the NewsDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsDbProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(searchQuery: String) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into search_query (query) values (?)';
        let data = [searchQuery];

        return db.executeSql(sql, data)
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
  }      

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT query FROM search_query ORDER BY id DESC LIMIT 5';
        var data: any[];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let newsArray: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var news = data.rows.item(i).query;
                newsArray.push(news);
              }
              return newsArray;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
