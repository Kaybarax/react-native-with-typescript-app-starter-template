//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN from 'react-native';
import RecipeDashboardItemCard from "./recipe-dashboard-item-card";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isEmptyArray, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";

export function RecipeHome(props) {

    let {recipeBoxStore} = props;
    let {toastNotificationAlert, recipes, action} = recipeBoxStore;

    if (isEmptyArray(recipes)) {
        return (
            <NoRecipesDisplay/>
        );
    }

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
        >
            <RN.FlatList
                data={recipes}
                renderItem={recipe => <RecipeDashboardItemCard
                    recipe={recipe} dashboardCard={true}/>}
                keyExtractor={_ => makeId(16)}
            />

            {/*{*/}
            {/*    (action === RECIPE_BOX_HOME_ACTIONS.VIEW_SINGLE_RECIPE) &&*/}
            {/*    <RN.View*/}
            {/*        style={[*/}
            {/*            ...className(*/}
            {/*                FlexFluidRowContainerCN,*/}
            {/*                AlignCenterContentCN*/}
            {/*            )*/}
            {/*        ]}*/}
            {/*    >*/}
            {/*      <RN.View*/}
            {/*          style={[*/}
            {/*              ...className(*/}
            {/*                  FlexContainerChildItemOneQuarterWidthCN,*/}
            {/*              )*/}
            {/*          ]}*/}
            {/*      >*/}
            {/*        <RecipeDashboardItemCard*/}
            {/*        />*/}

            {/*      </RN.View>*/}

            {/*    </RN.View>*/}
            {/*}*/}

            {
                (displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                    expectationOfX => isTrue(expectationOfX))) &&
                <RN.View
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
                </RN.View>
            }

        </RN.ScrollView>
    );

}

export function NoRecipesDisplay(props) {

    let {navigation, navStore} = props;

    return (
        <RN.ScrollView
            style={[
                ...className(FlexColumnContainerCN)
            ]}
        >
            <RN.View
                style={[
                    ...className(FlexContainerChildItemFullWidthCN)
                ]}
            >
                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >
                    <RN.Text
                        style={[
                            ...className(
                                FlexContainerChildItemFullWidthCN,
                                AlignCenterContentCN
                            ),
                            {
                                fontSize: 18,
                                fontWeight: 'bold'
                            }
                        ]}
                    >
                        You don't have any recipes. {'\n'}
                        From the menu, go to "Create/Edit Recipes" to create your recipes.
                    </RN.Text>
                </RN.View>
            </RN.View>
            <RN.View
                style={[
                    ...className(FlexContainerChildItemFullWidthCN)
                ]}
            >
                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >
                    <RN.View
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >
                        <RN.Button
                            title={'Exit'}
                            onPress={_ => {
                                navigation.goBack()
                            }}
                            color={'red'}
                        />
                    </RN.View>
                </RN.View>
            </RN.View>
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
