//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {isEmptyObject, isNullUndefined} from '../util/util';
import {
    MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW,
    MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW,
    PAGE1EXAMPLE_SCREEN_VIEW,
    PAGE2EXAMPLE_SCREEN_VIEW,
    PAGE3EXAMPLE_SCREEN_VIEW,
    PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW,
    PAGE4EXAMPLE_SCREEN_VIEW
} from "./views-routes-declarations";
import {InternalRoutes} from "./routes";
import {toJS} from "mobx";

/**
 * sd _ Kaybarax
 * NOTE1: THERE IS NO 'NAVIGATE TO DEFAULT' FOR THIS TEMPLATE FRAMEWORK, BECAUSE
 * THAT WOULD BE NAVIGATING TO LOGIN PAGE, AND THAT IS HANDLED BY LOGOUT LOGIC FROM 'AUTH-STORE'
 * NOTE2: HERE, NAVIGATION IS USING ".navigate(...) and .goBack()" BECAUSE THAT IS NAVIGATION FUNCTION PROVIDED BY
 * REACT-NAVIGATION IN USE HERE! REPLACE WITH APPROPRIATE NAVIGATION FUNCTION IF USING ANOTHER
 * ROUTER IN OF YOUR CHOICE. LOGIC REMAINS THE SAME
 */
export class AppNavigation {

    navigatedToParams = null;
    navigatedTo = null;
    navigatedFrom = null;
    navStore = null;

    navigate = (navigator, navTo, navFrom: string | any = this.navigatedTo,
                navParams: object | any = null, goingBack = false) => {

        this.navigatedFrom = navFrom;
        this.navigatedTo = navTo;

        //trail navigation
        if (!isNullUndefined(this.navStore)) {
            this.trailNavigation(goingBack, this.navStore);
        }

        //continue with navigation
        if (goingBack) {
            navigator.goBack();
        }
        if (!isEmptyObject(navParams)) {
            this.navigatedToParams = navParams;
            navigator.navigate(this.navigatedTo, navParams);
        } else {
            this.navigatedToParams = null;//clear any previous navigation params
            navigator.navigate(this.navigatedTo);
        }

    };

    trailNavigation = (goingBack, navStore) => {
        let goTo = navStore.currentNavigationTrailIndex - 1;
        if (goTo >= 0) {
            navStore.currentNavigationTrailIndex = goTo;
        }
        if (goingBack) {
            //remove whence come from
            navStore.navigationTrail.splice((navStore.currentNavigationTrailIndex + 1), 1);
        } else {
            navStore.navigationTrail.push(this.navigatedTo);
            navStore.currentNavigationTrailIndex = navStore.navigationTrail.length - 1;
        }
    }

    navigateBack = (navigator, navStore, navParams = null) => {
        console.log('navigator, navParams, appNav \n',
            navigator, navParams, navStore)
        if (isNullUndefined(navStore?.navigatedFrom)) {
            return;
        }
    }

    navigateToHome = (navigator, navParams = null) => {
        this.navigate(
            navigator,
            PAGE1EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage2Example = (navigator, navParams = null) => {
        this.navigate(
            navigator,
            PAGE2EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage3Example = (navigator, navParams = null) => {
        this.navigate(
            navigator,
            PAGE3EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage4Example = (navigator, navParams = null) => {
        this.navigate(
            navigator,
            PAGE4EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage4SubItemExample = (navigator, navParams = null) => {
        this.navigate(
            navigator,
            PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    loginToRecipeBox = (navigator, navParams = null) => {
        console.log('\nnavigator', navigator);
        console.log('\nnavParams', navParams);
        this.navigate(
            navigator,
            InternalRoutes.MY_RECIPE_TABBING,
            this.navigatedTo,
            navParams
        );
        console.log('\nnavStore', toJS(this.navStore));
    }

    navigateToRecipeDetails = (navigator, navParams: object | any = null) => {
        console.log('\nnavigateToRecipeDetails\n\n');
        console.log('\nnavigator', navigator);
        console.log('\nnavParams', navParams);
        this.navigate(
            navigator,
            MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
        console.log('\nnavStore', toJS(this.navStore));
    }

    navigateToCreateEditRecipe = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

}

const appNavigation = new AppNavigation();
export default appNavigation;
