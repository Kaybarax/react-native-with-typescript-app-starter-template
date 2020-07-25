//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import SQLite from 'react-native-sqlite-storage';
import {APP_SQLITE_DATABASE, DB_REFERENCE} from './declarations';
import {Recipe, User} from './models-manager';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

/**
 * sd _ Kaybarax
 */
class AppSQLiteDb {

  // constructor() {
  //   this.progress = [];
  //   this.appDatabase = APP_SQLITE_DATABASE.DATABASES[0];
  //   //start up SQLite database
  //   this.updateProgress('Starting SQLite', true);
  //   this.loadAndInitDB();
  //
  // }

  // updateProgress = (text, resetState) => {
  //   let progress = [];
  //   if (!resetState) {
  //     progress = [...this.progress];
  //   }
  //   progress.push(text);
  //   this.progress = progress;
  //   console.log('this.progress', this.progress);
  // };

  // errorCB = (err) => {
  //   console.log('error: ', err);
  //   this.updateProgress('Error: ' + (err.message || err));
  //   return false;
  // };

  // successCB = () => {
  //   console.log('SQL executed ...');
  // };

  // openCB = () => {
  //   this.updateProgress('Database OPEN');
  // };

  // closeCB = () => {
  //   this.updateProgress('Database CLOSED');
  // };

  // deleteCB = () => {
  //   console.log('Database DELETED');
  //   this.updateProgress('Database DELETED');
  // };

  // initDatabase = (db) => {
  //   this.updateProgress('Database integrity check');
  //   db.executeSql('SELECT 1 FROM Version LIMIT 1', [],
  //       () => {
  //         this.updateProgress('Database is ready ... executing query ...');
  //         db.transaction(
  //             this.executeQueryTests,
  //             this.errorCB,
  //             () => {
  //               this.updateProgress('Processing completed');
  //             });
  //       },
  //       (error) => {
  //         console.log('received version error:', error);
  //         this.updateProgress('Database not yet ready ... populating data');
  //         db.transaction(
  //             this.populateDB,
  //             this.errorCB,
  //             () => {
  //               this.updateProgress('Database populated ... executing query ...');
  //               db.transaction(
  //                   this.executeQueryTests,
  //                   this.errorCB,
  //                   () => {
  //                     console.log('Transaction is now finished');
  //                     this.updateProgress('Processing completed');
  //                     this.closeDatabase();
  //                   });
  //             });
  //       });
  // };

  // populateDB = (tx) => {
  //
  //   this.updateProgress('Executing stmts');
  //
  //   tx.executeSql('DROP TABLE IF EXISTS Version;');
  //   tx.executeSql('CREATE TABLE IF NOT EXISTS Version ( '
  //       + 'version_id INTEGER PRIMARY KEY NOT NULL); ',
  //       [], this.successCB, this.errorCB);
  //
  //   tx.executeSql('DROP TABLE IF EXISTS APP_REF_KEYS;');
  //   tx.executeSql(`CREATE TABLE IF NOT EXISTS APP_REF_KEYS (
  //       key varchar(20),
  //       label varchar(100),
  //       value INTEGER,
  //       PRIMARY KEY (key,label);`,
  //       [], this.successCB, this.errorCB);
  //
  //   tx.executeSql('DROP TABLE IF EXISTS USER;');
  //   tx.executeSql(`CREATE TABLE IF NOT EXISTS USER (
  //       id varchar(32),
  //       name varchar(50),
  //       email varchar(50),
  //       username varchar(16),
  //       status_ref_key_key varchar(20),
  //       status_ref_key_value INTEGER,
  //       PRIMARY KEY (id),
  //       FOREIGN KEY ( status_ref_key_key, status_ref_key_value ) REFERENCES APP_REF_KEYS ( key, value );`,
  //       [], this.successCB, this.errorCB);
  //
  //   tx.executeSql('DROP TABLE IF EXISTS USER_CREDENTIALS;');
  //   tx.executeSql(`CREATE TABLE IF NOT EXISTS USER_CREDENTIALS (
  //       username varchar(16),
  //       password_hash varchar(128),
  //       salt varbinary(24),
  //       PRIMARY KEY (username),
  //       FOREIGN KEY ( username ) REFERENCES USER ( username );`,
  //       [], this.successCB, this.errorCB);
  //
  //   tx.executeSql('DROP TABLE IF EXISTS RECIPE;');
  //   tx.executeSql(`CREATE TABLE IF NOT EXISTS RECIPE (
  //       id varchar(32) NOT NULL,
  //       name varchar(128),
  //       is_vegetarian boolean DEFAULT false,
  //       is_vegan boolean DEFAULT false,
  //       ingredients TEXT,
  //       cooking_instructions TEXT,
  //       groups_suitable TEXT,
  //       date_created datetime,
  //       status_ref_key_key varchar(20),
  //       status_ref_key_value INTEGER,
  //       PRIMARY KEY (id),
  //       FOREIGN KEY ( status_ref_key_key, status_ref_key_value ) REFERENCES APP_REF_KEYS ( key, value ),
  //       FOREIGN KEY ( recipe_id ) REFERENCES RECIPE ( recipe_id );`,
  //       [], this.successCB, this.errorCB);
  //
  //   tx.executeSql('DROP TABLE IF EXISTS RECIPE_IMAGE;');
  //   tx.executeSql(`CREATE TABLE IF NOT EXISTS RECIPE_IMAGE (
  //       recipe_id varchar(32) NOT NULL,
  //       image_url varchar(257),
  //       image_blob BLOB,
  //       PRIMARY KEY (recipe_id),
  //       FOREIGN KEY ( recipe_id ) REFERENCES RECIPE ( recipe_id );`,
  //       [], this.successCB, this.errorCB);
  //
  //   this.updateProgress('Executing INSERT stmts');
  //
  //   // tx.executeSql(`INSERT INTO Employees (name, office, department, custom_info) VALUES ("Sylvester Stallone", 2, 4, '{"known": true}')`, []);
  //   // tx.executeSql(`INSERT INTO Employees (name, office, department, custom_info) VALUES ("Elvis Presley", 2, 4, '{"known": true}')`, []);
  //   // tx.executeSql(`INSERT INTO Employees (name, office, department, custom_info) VALUES ("Donald Trump", 2, 4, '{"known": true, "impeached": true}')`, []);
  //   // tx.executeSql(`INSERT INTO Employees (name, office, department, custom_info) VALUES ("Samantha Fox", 2, 1, '{"known": true}')`, []);
  //
  //   console.log('all config SQL done');
  // };

  // DML_Statements = {
  //   addUserStmt (tx, user) {
  //     tx.executeSql(`INSERT INTO USER (id, name, email, username, status_ref_key_key, status_ref_key_value)
  //                   VALUES ("${user.id}", "${user.name}", "${user.email}",
  //                           "${user.username}", "${user.status_ref_key_key}",
  //                           "${user.status_ref_key_value}"`, [], this.successCB, this.errorCB);
  //   },
  //   addUserCredentialsStmt (tx, data) {
  //     tx.executeSql(`INSERT INTO USER_CREDENTIALS (username, password_hash, salt)
  //                   VALUES ("${data.username}", "${data.password_hash}", "${data.salt}"`,
  //                 [], this.successCB, this.errorCB);
  //   },
  //   addRecipeStmt (tx, data = new Recipe()) {
  //     tx.executeSql(`INSERT INTO RECIPE (id, name, email, username, status_ref_key_key, status_ref_key_value)
  //                   VALUES ("${data.id}", "${user.name}", "${user.email}",
  //                           "${user.username}", "${user.status_ref_key_key}",
  //                           "${user.status_ref_key_value}"`, [], this.successCB, this.errorCB);
  //   },
  //   addRecipePhotoStmt (tx, data) {
  //     tx.executeSql(`INSERT INTO USER (id, name, email, username, status_ref_key_key, status_ref_key_value)
  //                   VALUES ("${user.id}", "${user.name}", "${user.email}",
  //                           "${user.username}", "${user.status_ref_key_key}",
  //                           "${user.status_ref_key_value}"`, [], this.successCB, this.errorCB);
  //   },
  // };

  //querying examples
  // queryEmployees = async (tx) => {
  //
  //   console.log('Executing JSON1 queries...');
  //
  //   // 1. JSON_OBJECT
  //   await tx.executeSql(`SELECT JSON_OBJECT('name', e.name, 'office_id', e.office, 'department_id', e.department) AS data FROM Employees e`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 2. JSON_ARRAY
  //   // Expected: [1,2,"3",4]
  //   await tx.executeSql(`SELECT JSON_ARRAY(1, 2, '3', 4) AS data `, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 3. JSON_ARRAY_LENGTH
  //   // Expected: 4
  //   await tx.executeSql(`SELECT JSON_ARRAY_LENGTH('[1, 2, 3, 4]') AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 4. JSON_EXTRACT
  //   await tx.executeSql(`SELECT JSON_EXTRACT(e.custom_info, '$.known')  AS data FROM Employees e`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 5. JSON_INSERT
  //   // Expected: {"a":1,"b":2,"c":3}
  //   await tx.executeSql(`SELECT JSON_INSERT('{"a": 1, "b": 2}', '$.c', 3)  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 6. JSON_REPLACE
  //   // Expected: {"a":1,"b":3}
  //   await tx.executeSql(`SELECT JSON_REPLACE('{"a": 1, "b": 2}', '$.b', 3)  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 7. JSON_SET
  //   // Expected: {"a":1,"b":123}
  //   await tx.executeSql(`SELECT JSON_SET('{"a": 1, "b": 2}', '$.b', 123)  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 8. JSON_REMOVE
  //   // Expected: {"a":1"}
  //   await tx.executeSql(`SELECT JSON_REMOVE('{"a": 1, "b": 2}', '$.b')  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 9. JSON_TYPE
  //   // Expected: integer
  //   await tx.executeSql(`SELECT JSON_TYPE('{"a": 1, "b": 2}', '$.a')  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 10. JSON_VALID
  //   // Expected: 0
  //   await tx.executeSql(`SELECT JSON_VALID('{"a": 1, "b": 2')  AS data`, [],
  //       this.querySuccess, this.errorCB);
  //
  //   // 11. JSON_QUOTE
  //   // Expected: "value"
  //   await tx.executeSql(`SELECT JSON_QUOTE('value')  AS data`, [],
  //       this.querySuccess, this.errorCB);
  // };

  // executeQueryTests = async (tx) => {
  //
  //   console.log('Executing JSON1 queries...');
  //
  //   // 2. JSON_ARRAY
  //   // Expected: [1,2,"3",4]
  //   await tx.executeSql(`SELECT JSON_ARRAY(1, 2, '3', 4) AS data `,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 3. JSON_ARRAY_LENGTH
  //   // Expected: 4
  //   await tx.executeSql(`SELECT JSON_ARRAY_LENGTH('[1, 2, 3, 4]') AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 5. JSON_INSERT
  //   // Expected: {"a":1,"b":2,"c":3}
  //   await tx.executeSql(`SELECT JSON_INSERT('{"a": 1, "b": 2}', '$.c', 3)  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 6. JSON_REPLACE
  //   // Expected: {"a":1,"b":3}
  //   await tx.executeSql(`SELECT JSON_REPLACE('{"a": 1, "b": 2}', '$.b', 3)  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 7. JSON_SET
  //   // Expected: {"a":1,"b":123}
  //   await tx.executeSql(`SELECT JSON_SET('{"a": 1, "b": 2}', '$.b', 123)  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 8. JSON_REMOVE
  //   // Expected: {"a":1"}
  //   await tx.executeSql(`SELECT JSON_REMOVE('{"a": 1, "b": 2}', '$.b')  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 9. JSON_TYPE
  //   // Expected: integer
  //   await tx.executeSql(`SELECT JSON_TYPE('{"a": 1, "b": 2}', '$.a')  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 10. JSON_VALID
  //   // Expected: 0
  //   await tx.executeSql(`SELECT JSON_VALID('{"a": 1, "b": 2')  AS data`,
  //       [], this.querySuccess, this.errorCB);
  //
  //   // 11. JSON_QUOTE
  //   // Expected: "value"
  //   await tx.executeSql(`SELECT JSON_QUOTE('value')  AS data`,
  //       [], this.querySuccess, this.errorCB);
  // };

  // querySuccess = (tx, results) => {
  //   this.updateProgress('Query completed');
  //   var len = results.rows.length;
  //   for (let i = 0; i < len; i++) {
  //     let row = results.rows.item(i);
  //     this.updateProgress(`${row.data}`);
  //   }
  // };

  // loadAndInitDB = () => {
  //   this.updateProgress('Opening database ...', true);
  //   DB_REFERENCE.db = SQLite.openDatabase(
  //       this.appDatabase.NAME, APP_SQLITE_DATABASE.DATABASE_VERSION,
  //       this.appDatabase.NAME, APP_SQLITE_DATABASE.DATABASE_SIZE,
  //       this.openCB, this.errorCB,
  //   );
  //   this.initDatabase(DB_REFERENCE.db);
  // };

  // deleteDatabase = () => {
  //   this.updateProgress('Deleting database');
  //   SQLite.deleteDatabase(this.appDatabase.NAME, this.deleteCB, this.errorCB);
  // };

  //call this on exit of application
  // closeDatabase = () => {
  //   if (DB_REFERENCE.db) {
  //     console.log('Closing database ...');
  //     this.updateProgress('Closing database');
  //     DB_REFERENCE.db.close(this.closeCB, this.errorCB);
  //   } else {
  //     this.updateProgress('Database was not OPENED');
  //   }
  // };

}

export const appSQLiteDb = new AppSQLiteDb();
