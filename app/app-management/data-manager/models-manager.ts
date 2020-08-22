//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

//your app models here

export interface AppRefKey {
    key: string,
    label: string,
    value: string,
}

export type User = {
    id: string,
    name?: string,
    email?: string,
    username?: string,
    status_ref_key_key?: string,
    status_ref_key_value?: string,
}

export interface UserCredentials {
    username: string,
    password_hash?: string,
    salt?: object,
}

export interface Recipe {
    id: string,
    name?: string,
    is_vegetarian?: boolean,
    is_vegan?: boolean,
    ingredients?: Array<string>,
    cooking_instructions?: Array<string>,
    groups_suitable?: Array<string>,
    date_created?: Date,
    rating?: number,
    status_ref_key_key?: string,
    status_ref_key_value?: string,
}

export interface RecipeImage {
    id: string,
    recipe_id?: string,
    image_url?: string,
    image_file?: string,
}

/**
 * sd _ Kaybarax
 * @param code
 * @param name
 * @returns {{code: *, name: *}}
 * @constructor
 */
export function FoodGroupConsumer(code, name) {
    return {
        code: code,
        name: name,
    };
}

