//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import SQLite from 'react-native-sqlite-storage';
import {APP_SQLITE_DATABASE} from './declarations';
// import {AppRefKey, Recipe, RecipeImage, User, UserCredentials} from './models-manager';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

/**
 * sd _ Kaybarax
 */
class AppSQLiteDb {

  constructor() {
    this.progress = [];
    this.latestProgressUpdate = 'Initializing app db...';
    this.dbLoadedAndInitialized = false;
    this.appDatabase = APP_SQLITE_DATABASE.DATABASES.APP_DB;
    this.updateProgress('Starting SQLite');
  }

  updateProgress = (text) => {
    this.latestProgressUpdate = text;
    this.progress.push(text);
    console.log('this.progress', this.progress);
  };

  errorCB = (err) => {
    console.log('error: ', err);
    this.updateProgress('Error: ' + (err.message || err));
    return false;
  };

  successCB = () => {
    console.log('SQL executed ...');
    return true;
  };

  openCB = () => {
    this.updateProgress('Database OPEN');
  };

  closeCB = () => {
    this.updateProgress('Database CLOSED');
  };

  deleteCB = () => {
    console.log('Database DELETED');
    this.updateProgress('Database DELETED');
  };

  loadAndInitDB = () => {
    this.updateProgress('Opening database ...', true);
    APP_SQLITE_DATABASE.DB_REFERENCE = SQLite.openDatabase(
        this.appDatabase.name, APP_SQLITE_DATABASE.DATABASE_VERSION,
        this.appDatabase.name, APP_SQLITE_DATABASE.DATABASE_SIZE,
        this.openCB, this.errorCB,
    );
    this.initDatabase(APP_SQLITE_DATABASE.DB_REFERENCE);
  };

  initDatabase = (db) => {

    this.updateProgress('Database integrity check');

    let databaseReady = false;

    db.executeSql('SELECT 1 FROM Version LIMIT 1', [],
        () => { //on success
          this.updateProgress('Database is ready ... executing initial queries ...');
          databaseReady = true;
        },
        (error) => {//on error
          console.log('received version error:', error);
          this.updateProgress('Database not yet ready ... will try to populate db');
        },
    );

    if (!databaseReady) {

      //populate db
      this.updateProgress('Populate db');

      db.transaction(this.populateDB, this.errorCB,
          () => {//on success
            this.updateProgress('Database populated');
            databaseReady = true;
          },
      );

    }

    let executeInitialQueriesSuccess = false;

    if (databaseReady) {

      //run initial queries

      db.transaction(
          this.runInitialQueriesAndLoadInitialData,
          this.errorCB,
          () => {//on success
            console.log('Transaction is now finished');
            this.updateProgress('Processing completed');
            executeInitialQueriesSuccess = true;
            this.closeDatabase();
          });

    }

    if (databaseReady && executeInitialQueriesSuccess) {
      this.dbLoadedAndInitialized = true;
    }


    // db.executeSql('SELECT 1 FROM Version LIMIT 1', [],
    //     () => { //on success
    //       this.updateProgress('Database is ready ... executing query ...');
    //       db.transaction(
    //           this.runInitialQueriesAndLoadInitialData,
    //           this.errorCB,
    //           () => {//on success
    //             this.updateProgress('Processing completed');
    //             this.dbLoadedAndInitialized = true;
    //           });
    //     },
    //     (error) => { //on error
    //       console.log('received version error:', error);
    //       this.updateProgress('Database not yet ready ... populating data');
    //       db.transaction(
    //           this.populateDB,
    //           this.errorCB,
    //           () => {//on success
    //             this.updateProgress('Database populated ... executing query ...');
    //             db.transaction(
    //                 this.runInitialQueriesAndLoadInitialData,
    //                 this.errorCB,
    //                 () => {//on success
    //                   console.log('Transaction is now finished');
    //                   this.updateProgress('Processing completed');
    //                   this.dbLoadedAndInitialized = true;
    //                   this.closeDatabase();
    //                 });
    //           });
    //     });

  };

  populateDB = (dbtx) => {

    this.updateProgress('Executing stmts');

    dbtx.executeSql('DROP TABLE IF EXISTS Version;');
    dbtx.executeSql('CREATE TABLE IF NOT EXISTS Version ( '
        + 'version_id INTEGER PRIMARY KEY NOT NULL); ',
        [], this.successCB, this.errorCB);

    dbtx.executeSql('DROP TABLE IF EXISTS APP_REF_KEYS;');
    dbtx.executeSql(`CREATE TABLE IF NOT EXISTS APP_REF_KEYS (
        key VARCHAR(20),
        label VARCHAR(100),
        value VARCHAR(10),
        PRIMARY KEY (key,value);`,
        [], this.successCB, this.errorCB);

    dbtx.executeSql('DROP TABLE IF EXISTS USER;');
    dbtx.executeSql(`CREATE TABLE IF NOT EXISTS USER (
        id VARCHAR(32),
        name VARCHAR(50),
        email VARCHAR(50),
        username VARCHAR(16),
        status_ref_key_key VARCHAR(20),
        status_ref_key_value VARCHAR(10),
        PRIMARY KEY (id),
        FOREIGN KEY ( status_ref_key_key, status_ref_key_value ) REFERENCES APP_REF_KEYS ( key, value );`,
        [], this.successCB, this.errorCB);

    dbtx.executeSql('DROP TABLE IF EXISTS USER_CREDENTIALS;');
    dbtx.executeSql(`CREATE TABLE IF NOT EXISTS USER_CREDENTIALS (
        username VARCHAR(16),
        password_hash VARCHAR(128),
        salt blob, --varbinary(24)
        PRIMARY KEY (username),
        FOREIGN KEY ( username ) REFERENCES USER ( username );`,
        [], this.successCB, this.errorCB);

    dbtx.executeSql('DROP TABLE IF EXISTS RECIPE;');
    dbtx.executeSql(`CREATE TABLE IF NOT EXISTS RECIPE (
        id VARCHAR(32) NOT NULL,
        name VARCHAR(128),
        is_vegetarian INTEGER, --boolean DEFAULT false,
        is_vegan INTEGER, --boolean DEFAULT false,
        ingredients TEXT,
        cooking_instructions TEXT,
        groups_suitable TEXT,
        date_created datetime,
        status_ref_key_key VARCHAR(20),
        status_ref_key_value INTEGER,
        PRIMARY KEY (id),
        FOREIGN KEY ( status_ref_key_key, status_ref_key_value ) REFERENCES APP_REF_KEYS ( key, value );`,
        [], this.successCB, this.errorCB);

    dbtx.executeSql('DROP TABLE IF EXISTS RECIPE_IMAGE;');
    dbtx.executeSql(`CREATE TABLE IF NOT EXISTS RECIPE_IMAGE (
        id VARCHAR(32) NOT NULL,
        recipe_id VARCHAR(32) NOT NULL,
        image_url VARCHAR(257),
        image_file BLOB,
        PRIMARY KEY (id ),
        FOREIGN KEY ( recipe_id ) REFERENCES RECIPE ( id );`,
        [], this.successCB, this.errorCB);

    //db bootstrap inserts
    this.updateProgress('Executing INSERT stmts');

    dbtx.executeSql(`INSERT INTO APP_REF_KEYS (key, label, value) 
                  VALUES ("Status", "Active", "ACT")`,
        []);
    dbtx.executeSql(`INSERT INTO APP_REF_KEYS (key, label, value) 
                  VALUES ("Status", "Disabled", "DIS")`,
        []);
    dbtx.executeSql(`INSERT INTO APP_REF_KEYS (key, label, value) 
                  VALUES ("Status", "Deleted", "DEL")`,
        []);

    //json data insert examples
    // dbtx.executeSql(`INSERT INTO Employees (name, office, department, custom_info)
    //                 VALUES ("Sylvester Stallone", 2, 4, '{"known": true}')`, []);
    // dbtx.executeSql(`INSERT INTO Employees (name, office, department, custom_info)
    //                 VALUES ("Donald Trump", 2, 4, '{"known": true, "impeached": true}')`, []);

    console.log('All SQL stmts done');

  };

  addAppRefKeyStmt(dbtx, data) {
    let {
      key, value, label,
    } = data;
    dbtx.executeSql(`INSERT INTO APP_REF_KEYS (key, value, label) 
                    VALUES ("${key}", "${label}", "${value}")`,
        [], this.successCB, this.errorCB);
  }

  addUserStmt(dbtx, user) {
    let {
      id, name, email, username,
      status_ref_key_key, status_ref_key_value,
    } = user;
    return dbtx.executeSql(`INSERT INTO USER (id, name, email, username, status_ref_key_key, 
                    status_ref_key_value) VALUES ("${id}", "${name}", "${email}", "${username}", 
                    "${status_ref_key_key}", "${status_ref_key_value}")`,
        [], this.successCB, this.errorCB);
  }

  addUserCredentialsStmt(dbtx, data) {
    let {username, password_hash, salt} = data;
    dbtx.executeSql(`INSERT INTO USER_CREDENTIALS (username, password_hash, salt)
                    VALUES ("${username}", "${password_hash}", "${salt}")`,
        [], this.successCB, this.errorCB);
  }

  addRecipeStmt(dbtx, data) {
    let {
      id,
      name,
      is_vegetarian,
      is_vegan,
      ingredients,
      cooking_instructions,
      groups_suitable,
      date_created,
      status_ref_key_key,
      status_ref_key_value,
    } = data;
    dbtx.executeSql(`INSERT INTO RECIPE (id, name, is_vegetarian, is_vegan,ingredients,
                    cooking_instructions, groups_suitable, date_created, status_ref_key_key, status_ref_key_value) 
                    VALUES ("${id}", "${name}", "${is_vegetarian}", "${is_vegan}", "${ingredients}",
                            "${cooking_instructions}", "${groups_suitable}", "${date_created}", 
                            "${status_ref_key_key}", "${status_ref_key_value}")`,
        [], this.successCB, this.errorCB);
  }

  addRecipeImageStmt(dbtx, data) {
    let {id, recipe_id, image_url, image_file} = data;
    dbtx.executeSql(`INSERT INTO USER (id, recipe_id, image_url, image_file)
                    VALUES ("${id}", "${recipe_id}", "${image_url}", "${image_file}")`,
        [], this.successCB, this.errorCB);
  }

  runInitialQueriesAndLoadInitialData = async (dbtx) => {

    console.log('Executing JSON1 queries...');

    // 2. JSON_ARRAY
    // Expected: [1,2,"3",4]
    await dbtx.executeSql(`SELECT JSON_ARRAY(1, 2, '3', 4) AS data `,
        [], this.querySuccess, this.errorCB);

    // 3. JSON_ARRAY_LENGTH
    // Expected: 4
    await dbtx.executeSql(`SELECT JSON_ARRAY_LENGTH('[1, 2, 3, 4]') AS data`,
        [], this.querySuccess, this.errorCB);

    // 5. JSON_INSERT
    // Expected: {"a":1,"b":2,"c":3}
    await dbtx.executeSql(`SELECT JSON_INSERT('{"a": 1, "b": 2}', '$.c', 3)  AS data`,
        [], this.querySuccess, this.errorCB);

    // 6. JSON_REPLACE
    // Expected: {"a":1,"b":3}
    await dbtx.executeSql(`SELECT JSON_REPLACE('{"a": 1, "b": 2}', '$.b', 3)  AS data`,
        [], this.querySuccess, this.errorCB);

    // 7. JSON_SET
    // Expected: {"a":1,"b":123}
    await dbtx.executeSql(`SELECT JSON_SET('{"a": 1, "b": 2}', '$.b', 123)  AS data`,
        [], this.querySuccess, this.errorCB);

    // 8. JSON_REMOVE
    // Expected: {"a":1"}
    await dbtx.executeSql(`SELECT JSON_REMOVE('{"a": 1, "b": 2}', '$.b')  AS data`,
        [], this.querySuccess, this.errorCB);

    // 9. JSON_TYPE
    // Expected: integer
    await dbtx.executeSql(`SELECT JSON_TYPE('{"a": 1, "b": 2}', '$.a')  AS data`,
        [], this.querySuccess, this.errorCB);

    // 10. JSON_VALID
    // Expected: 0
    await dbtx.executeSql(`SELECT JSON_VALID('{"a": 1, "b": 2')  AS data`,
        [], this.querySuccess, this.errorCB);

    // 11. JSON_QUOTE
    // Expected: "value"
    await dbtx.executeSql(`SELECT JSON_QUOTE('value')  AS data`,
        [], this.querySuccess, this.errorCB);

    //get ref keys
    await dbtx.executeSql(`SELECT * from APP_REF_KEYS;`,
        [], this.querySuccess, this.errorCB);

  };

  querySuccess = (dbtx, results) => {
    console.log('querySuccess results: ', results);
    this.updateProgress('Query completed');
    let len = results.rows.length;
    for (let i = 0; i < len; i++) {
      let row = results.rows.item(i);
      this.updateProgress(`${row.data}`);
    }
  };

  deleteDatabase = () => {
    this.updateProgress('Deleting database');
    SQLite.deleteDatabase(this.appDatabase.name, this.deleteCB, this.errorCB);
  };

  //call this on exit of application
  closeDatabase = () => {
    if (APP_SQLITE_DATABASE.DB_REFERENCE) {
      console.log('Closing database ...');
      this.updateProgress('Closing database');
      APP_SQLITE_DATABASE.DB_REFERENCE.close(this.closeCB, this.errorCB);
    } else {
      this.updateProgress('Database was not OPENED');
    }
  };

}

export const appSQLiteDb = new AppSQLiteDb();

//json data querying examples
// let queryEmployees = async (dbtx) => {
//
//   // 1. JSON_OBJECT query example
//   await dbtx.executeSql(`SELECT JSON_OBJECT('name', e.name, 'office_id', e.office, 'department_id', e.department)
//                       AS data FROM Employees e`,
//             [], this.querySuccess, this.errorCB);
//
//   // 4. JSON_EXTRACT query example
//   await dbtx.executeSql(`SELECT JSON_EXTRACT(e.custom_info, '$.known')  AS data FROM Employees e`, [],
//       this.querySuccess, this.errorCB);
//
// };
