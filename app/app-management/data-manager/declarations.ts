//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {Recipe, RecipeImage, User, UserCredentials} from './models-manager';
import {makeId} from "../../util/util";

export const APP_SQLITE_DATABASE = {
    DATABASE_VERSION: '1.0',
    DATABASE_SIZE: 200000,
    DB_REFERENCE: null,
    DATABASES: {
        APP_DB: {
            name: 'RNTSAST_E.db',
            tables: {
                USER: {
                    name: 'USER',
                    get schema() {
                        let schema: User = {id: makeId(32)};
                        return schema;
                    },
                },
                USER_CREDENTIALS: {
                    name: 'USER_CREDENTIALS',
                    schema() {
                        let schema: UserCredentials = {username: makeId(32)};
                        return schema;
                    },
                },
                RECIPE: {
                    name: 'RECIPE',
                    schema() {
                        let schema: Recipe = {id: makeId(32)};
                        return schema;
                    },
                },
                RECIPE_IMAGE: {
                    name: 'RECIPE_IMAGE',
                    schema() {
                        let schema: RecipeImage = {
                            id: makeId(32), image_file: '', image_url: '',
                        };
                        return schema;
                    },
                },
            },
        },
    },
};
