import {User} from './models-manager';

export const APP_SQLITE_DATABASE = {
  USERS: 'USERS',
  DATABASE_VERSION: '1.0',
  DATABASE_SIZE: 200000,
  DATABASES: [
    {
      NAME: 'RNTSAST.db',
      TABLES: [
        {
          tableName: 'USER',
          schema: new User(),
        },
      ],
    },
  ],
};

export const DB_REFERENCE = {
  db: null,
};
