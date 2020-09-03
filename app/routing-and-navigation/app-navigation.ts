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
    APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW,
    APP_TOP_TABS_SCREEN_VIEW,
    MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW,
    MY_RECIPE_LOGIN_SCREEN_VIEW,
    MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW,
    PAGE1EXAMPLE_SCREEN_VIEW,
    PAGE2EXAMPLE_SCREEN_VIEW,
    PAGE3EXAMPLE_SCREEN_VIEW,
    PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW,
    PAGE4EXAMPLE_SCREEN_VIEW,
    RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW,
    RECIPE_BOX_SUB_APP_SCREEN_VIEW
} from "./views-routes-declarations";

/**
 * sd _ Kaybarax
 * NOTE1: THERE IS NO 'NAVIGATE TO DEFAULT' FOR THIS TEMPLATE FRAMEWORK, BECAUSE
 * THAT WOULD BE NAVIGATING TO LOGIN PAGE, AND THAT IS HANDLED BY LOGOUT LOGIC FROM 'AUTH-STORE'
 * NOTE2: HERE, NAVIGATION IS USING ".navigate(...) and .goBack()" BECAUSE
 * THAT IS NAVIGATION FUNCTION PROVIDED BY
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

    navigateBack = (navigator, navStore, navParams: object | any = null) => {
        console.log('navigator, navParams, appNav \n',
            navigator, navParams, navStore)
        if (isNullUndefined(navStore?.navigatedFrom)) {
            return;
        } else {
            //todo: complete nav back logic
        }
    }

    navigateToHome = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            APP_TOP_TABS_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage1Example = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            PAGE1EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage2Example = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            PAGE2EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage3Example = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            PAGE3EXAMPLE_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToPage4Example = (navigator, navParams: object | any = null) => {
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

    navigateToAppDevScratchPad = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToRecipeBoxSubApplication = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            RECIPE_BOX_SUB_APP_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToRecipeBoxLogin = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            MY_RECIPE_LOGIN_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToRecipeBoxHome = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
    }

    navigateToRecipeDetails = (navigator, navParams: object | any = null) => {
        this.navigate(
            navigator,
            MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.name,
            this.navigatedTo,
            navParams
        );
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
