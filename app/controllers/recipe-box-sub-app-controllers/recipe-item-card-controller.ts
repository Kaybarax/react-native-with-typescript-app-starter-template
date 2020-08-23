//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {RECIPE_BOX_VIEWS_ACTIONS_ENUM} from "../../stores/actions-and-stores-data";
import appNavigation from "../../routing-and-navigation/app-navigation";

/**
 * sd _ Kaybarax
 * @param activity
 * @param recipe
 * @param viewRecipePhoto
 * @param recipeBoxStore
 */
export function viewRecipeFullDetailsClick(recipe, viewRecipePhoto, recipeBoxStore, activity = null) {
    recipeBoxStore.viewRecipe = recipe;
    recipeBoxStore.viewRecipePhoto = viewRecipePhoto;
    recipeBoxStore.viewAction = RECIPE_BOX_VIEWS_ACTIONS_ENUM.VIEW_SINGLE_RECIPE
}

/**
 * sd _ Kaybarax
 * @param activity
 * @param recipe
 * @param navigation
 * @param recipeBoxStore
 */
export function editRecipeClick(recipe, recipeBoxStore, navigation, activity = null) {
    recipeBoxStore.selectedRecipe = recipe;
    recipeBoxStore.viewAction = RECIPE_BOX_VIEWS_ACTIONS_ENUM.EDIT_RECIPE;
    appNavigation.navigateToCreateEditRecipe(navigation);
}

/**
 * sd _ Kaybarax
 * @param rootStore
 */
export function beforeEnterHomepage(rootStore) {
    rootStore.appStores.recipeBoxStore.viewAction = null;
    rootStore.appStores.recipeBoxStore.selectedRecipe = null;
}
