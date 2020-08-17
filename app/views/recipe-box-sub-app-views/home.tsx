//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN, {View} from 'react-native';
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import RecipeDashboardItemCard from "./recipe-dashboard-item-card";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isTrue} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {AllViewsCN} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";

export function RecipeHome(props) {

    let {recipeBoxStore} = props;
    let {toastNotificationAlert} = recipeBoxStore;

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
        >

            {/*//     <NavigationDrawer*/}
            {/*//     :drawer="drawer"*/}
            {/*//     :activity="this"*/}
            {/*// />*/}

            {/*    <AppBar*/}
            {/*    :drawer="drawer"*/}
            {/*    :activity="this"*/}
            {/*/>*/}

            <BlankSpaceDivider height={70}/>

            <RN.View
                // class="flex-row-container"
                // v-if="appStore.recipes.length === 0"
            >
                <RN.View
                    // class="flex-container-child-item center-align-content"
                >
                    <RN.Text
                        // h3
                    >
                        You don't have any recipes. From the menu, go to "Create/Edit Recipes" to create your recipes.
                    </RN.Text>
                </RN.View>
            </RN.View>

            <RN.View
                // class="flex-fluid-row-container center-align-content"
                // v-if="homepageStore.pageAction !== HOME_PAGE_ACTIONS.VIEW_SINGLE_RECIPE"
            >
                <RN.View
                    // class="flex-container-child-item-one-quarter-width"
                    // v-for="(recipe,i) in appStore.recipes"
                    //        :key="i"
                >
                    <RecipeDashboardItemCard
                        //        :recipe="recipe.recipe"
                        //        :recipePhoto="recipe.dish_image"
                        //        :dashboardCard="true"
                        //        :activity="this"
                    />

                </RN.View>

            </RN.View>

            <RN.View
                // class="flex-fluid-row-container center-align-content"
                // v-if="homepageStore.pageAction === HOME_PAGE_ACTIONS.VIEW_SINGLE_RECIPE"
            >
                <RN.View
                    // class="flex-container-child-item-one-quarter-width"
                >
                    <RecipeDashboardItemCard
                        //            :recipe="homepageStore.viewRecipe"
                        //            :recipePhoto="homepageStore.viewRecipePhoto"
                        //            :dashboardCard="false"
                        //            :activity="this"
                    />

                </RN.View>

            </RN.View>

            <RN.View
                // style="height: 80px"
            >&nbsp;</RN.View>

            {/*// <AppFooter*/}
            {/*// :activity="this"*/}
            {/*// />*/}

            {
                (
                    displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                        expectationOfX => isTrue(expectationOfX))
                ) &&
                <View
                    style={[
                        ...className(AllViewsCN),
                        {
                            position: 'absolute', bottom: 0
                        }
                    ]}
                >
                  <AppNotificationToastAlert
                      dropDownProps={toastNotificationAlert}
                  />
                </View>
            }

        </RN.ScrollView>
    );

}

const RecipeHomeActivity = WithStoresHoc(RecipeHome,
    ['authStore', 'appStores', 'recipeBoxStore']);
export default RecipeHomeActivity;


// import AppBar from './shared-secured-views-activities-components/app-bar'
// import NavigationDrawer from './shared-secured-views-activities-components/navigation-drawer'
// import AppFooter from './shared-secured-views-activities-components/app-footer'
// import {observer} from "mobx-vue";
// import rootStore from "../../stores";
// import RecipeDashboardItemCard from "./recipe-dashboard-item-card";
// import {HOME_PAGE_ACTIONS} from '../../stores/stores-data-store';
// import {editRecipeClick, viewRecipeFullDetailsClick} from "../../controllers/homepage-controller";
// import AppNotificationToastAlert
//     from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
// import {getAllRecipesForUser} from "../../controllers/app-controller";

// const Home = observer({
//     name: "home",
//     props: {},
//     computed: {
//         HOME_PAGE_ACTIONS: () => HOME_PAGE_ACTIONS,
//         viewRecipeFullDetailsClick: () => viewRecipeFullDetailsClick,
//         editRecipeClick: () => editRecipeClick
//     },
//     components: {
//         AppBar, NavigationDrawer,
//         AppFooter,
//         RecipeDashboardItemCard,
//         AppNotificationToastAlert
//     },
//     data: () => ({
//         appStores: rootStore.appStores,
//         appStore: rootStore.appStores.app,
//         authStore: rootStore.authStore,
//         homepageStore: rootStore.appStores.homepage,
//         toastNotificationAlert: rootStore.appStores.homepage.toastNotificationAlert,
//         drawer: {drawer: null},
//     }),
//     methods: {},
//     created() {
//         this.$vuetify.theme.dark = this.appStore.darkMode;
//     },
//     mounted() {
//         setTimeout(_ => getAllRecipesForUser(this, this.appStore.user.id), 1000);
//     }
// });

//
// <style scoped>
//
// </style>
