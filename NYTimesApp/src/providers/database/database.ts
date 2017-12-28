import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'newsdb.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        this.createTables(db);
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS search_query (id integer primary key AUTOINCREMENT NOT NULL, query TEXT NOT NULL)']
    ])
      .then(() => console.log('Creacion de tabla verificada'))
      .catch(e => console.error('Error al crear tabla', e));
  }

}
