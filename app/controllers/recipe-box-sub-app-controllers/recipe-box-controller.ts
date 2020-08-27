//key
//sd - self described

import {isNullUndefined, makeId, objectKeyExists} from "../../util/util";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
// import {APP_INDEXED_DB_DATASTORES} from "../app-management/data-manager/indexeddb-manager";
import {notificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";
import {toJS} from "mobx";

/**
 * sd _ Kaybarax
 * @param recipeBoxStore
 * @param activity
 */
export function createRecipe(recipeBoxStore, activity = null) {
    //the recipe
    let recipe: Recipe = {id: makeId(32)};
    recipe.date_created = (new Date()).toISOString();
    recipe.ingredients = [''];//add first initial entry
    recipe.cooking_instructions = [''];//add first initial entry
    recipe.status_ref_key_key = 'STATUS';//set status
    recipe.status_ref_key_value = 'ACT';//set status
    recipe.groups_suitable = [];
    recipe.is_vegetarian = false;
    recipe.is_vegan = false;
    recipe.rating = 0;
    //the photos
    let recipePhotos: Array<RecipeImage> = [];
    for (let i = 0; i < 5; i++) {
        let recipePhoto: RecipeImage = {
            id: makeId(32),
            recipe_id: recipe.id,
            image_url: '',
            image_file: ''
        };
        recipePhotos.push(recipePhoto);
    }
    recipeBoxStore.selectedRecipe = recipe;
    recipeBoxStore.selectedRecipePhotos = recipePhotos;
}

/**
 * sd _ Kaybarax
 * @param activity
 */
export function toggleDarkMode(activity) {
    activity.appStore.darkMode = !activity.appStore.darkMode;
    activity.$vuetify.theme.dark = activity.appStore.darkMode;
}

/**
 * sd _ Kaybarax
 * @param activity
 * @param userId
 */
export function getAllRecipesForUser(activity, userId) {

    // let db = window.db;//get db;
    // // Set up an object store and transaction
    // let tx = db.transaction([
    //     APP_INDEXED_DB_DATASTORES.RECIPES,
    //     APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
    // ], 'readonly');
    // let recipeStore = tx.objectStore(APP_INDEXED_DB_DATASTORES.RECIPES);
    // let recipeImagesStore = tx.objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES);
    //
    // // Set up a request to get all
    // let recipesRequest = recipeStore.getAll();
    //
    // // If we get an error
    // recipesRequest.onerror = function (event) {
    //     console.log('error getting recipes ', event.target.errorCode);
    //     notificationCallback('err', 'Cannot query recipes', activity);
    // }
    //
    // let myRecipes = [];
    // activity.appStores.userRecipesPhotos = [];//clear former
    //
    // // onsuccess handler
    // recipesRequest.onsuccess = function (event) {
    //     let recipes = event.target.result;
    //     // console.log('recipes', recipes);
    //     let userRecipes = recipes.filter(item => item.user_id === userId && item.status === STATUS_REF_KEY_ACTIVE.VALUE);
    //
    //     //now get recipe images
    //     let recipeImagesRequest = recipeImagesStore.getAll();
    //
    //     recipeImagesRequest.onerror = function (event) {
    //         console.log('error getting recipe images ', event.target.errorCode);
    //         notificationCallback('err', 'Cannot query recipe images', activity);
    //     }
    //
    //     recipeImagesRequest.onsuccess = function (event) {
    //         let recipeImages = event.target.result;
    //         // console.log('recipeImages', recipeImages);
    //         for (let recipe of userRecipes) {
    //             let item = {}, item2 = {};
    //             item.recipe = recipe;
    //             // item2.recipe = recipe;
    //             let recipeImage = recipeImages.find(it => it.recipe_id === recipe.id);
    //             item.dish_image = recipeImage.recipe_id;
    //             item2.recipe_id = recipeImage.recipe_id;
    //             item2.dish_image = recipeImage.data;
    //             myRecipes.push(item);
    //             activity.appStores.userRecipesPhotos.push(item2);
    //         }
    //
    //         // console.log('myRecipes', myRecipes);
    //         console.log('userRecipesPhotos', toJS(activity.appStores.userRecipesPhotos));
    //
    //         activity.appStore.recipes = [...myRecipes];
    //
    //     }
    //
    // }

}

/**
 * sd _ Kaybarax
 * @param recipe
 * @param activity
 */
export function deleteRecipe(recipe, activity) {

    // let recipeItem = toJS(recipe);//because of mobx proxies
    // //save to indexedDb
    // let db = window.db;//get db;
    // let trans = db.transaction([
    //     APP_INDEXED_DB_DATASTORES.RECIPES
    // ], 'readwrite');
    //
    // //to delete, simply update status to deleted, following data
    // //retention practices
    // recipeItem.status = STATUS_REF_KEY_DELETED.VALUE;
    //
    // let putRecipeReq = trans
    //     .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
    //     .put(recipeItem, recipe.id);
    //
    // putRecipeReq.onerror = function (e) {
    //     console.log('Error updating recipe');
    //     console.error(e);
    // }
    //
    // trans.oncomplete = function (e) {
    //     console.log('Deleted recipe');
    //     notificationCallback('succ', 'Recipe deleted', activity);
    //     //complete
    //     getAllRecipesForUser(activity, activity.appStore.user.id);
    //     //some time for notification alert
    //     setTimeout(_ => window.location.reload(), 1500)
    // }
    // trans.onerror = function (e) {
    //     console.log('IndexedDb error code: ' + e.target.errorCode);
    //     notificationCallback('err', 'Failed to delete recipe!', activity);
    // }

}
