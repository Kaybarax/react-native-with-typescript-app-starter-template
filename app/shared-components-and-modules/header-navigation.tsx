//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import SafeComponentWrapper from "../safe-component-wrapper";
import appNavigation from "../routing-and-navigation/app-navigation";
// import '../theme/nav-styles.scss';
import {
  HOME_VIEW_ROUTE,
  PAGE2EXAMPLE_VIEW_ROUTE,
  PAGE3EXAMPLE_VIEW_ROUTE,
  PAGE4EXAMPLE_VIEW_ROUTE
} from "../routing-and-navigation/views-routes-declarations";
import {View, Text, ScrollView} from "react-native";

export default function HeaderNavigation(props) {

  let {routerStore, authStore, appStore} = props;

  // let slug = '' + window.location.href;
  // slug = slug.split('/');
  // slug = slug[slug.length - 1];

  return (
      <SafeComponentWrapper>
        <View>
          <ScrollView>
            <View>
              <Text
                  // href={'/' + HOME_VIEW_ROUTE.routeName}
                  // onPress={_ => {
                  //   // _.preventDefault();
                  //   appNavigation.navigateToHome(routerStore, null)
                  // }}
              >Hi {appStore?.user?.name}</Text>
            </View>
            <View
                // id={`nav-${HOME_VIEW_ROUTE.routeName}`}
                // className={`${(slug === HOME_VIEW_ROUTE.routeName) ? 'selected' : ''}`}
            >
              <Text
                  // href={'/' + HOME_VIEW_ROUTE.routeName}
                  // onPress={_ => {
                  //   // _.preventDefault();
                  //   appNavigation.navigateToHome(routerStore, null);
                  // }}
              >Page 1</Text>
            </View>
            <View
                // id={`nav-${PAGE2EXAMPLE_VIEW_ROUTE.routeName}`}
                // className={`${(slug === PAGE2EXAMPLE_VIEW_ROUTE.routeName) ? 'selected' : ''}`}
            >
              <Text
                  // href={'/' + PAGE2EXAMPLE_VIEW_ROUTE.routeName}
                  // onPress={_ => {
                  //   // _.preventDefault();
                  //   appNavigation.navigateToPage2Example(routerStore, null);
                  // }}
              >Page 2</Text>
            </View>
            <View
                // id={`nav-${PAGE3EXAMPLE_VIEW_ROUTE.routeName}`}
                // className={`${(slug === PAGE3EXAMPLE_VIEW_ROUTE.routeName) ? 'selected' : ''}`}
            >
              <Text
                  // href={'/' + PAGE3EXAMPLE_VIEW_ROUTE.routeName}
                  // onPress={_ => {
                  //   // _.preventDefault();
                  //   appNavigation.navigateToPage3Example(routerStore, null)
                  // }}
              >Page 3</Text>
            </View>
            <View
                // id={`nav-${PAGE4EXAMPLE_VIEW_ROUTE.routeName}`}
                // className={`${(slug === PAGE4EXAMPLE_VIEW_ROUTE.routeName) ? 'selected' : ''}`}
            >
              <Text
                  // href={'/' + PAGE4EXAMPLE_VIEW_ROUTE.routeName}
                  // onPress={_ => {
                  //   // _.preventDefault();
                  //   appNavigation.navigateToPage4Example(routerStore, null);
                  // }}
              >Page 4</Text>
            </View>
            {/*<li id={'navigateToAppDevScratchPad'}>*/}
            {/*  <a*/}
            {/*      href={'/' + APP_DEV_MOCKS_VIEW_ROUTE.routeName}*/}
            {/*      onClick={_ => {*/}
            {/*        _.preventDefault();*/}
            {/*        appNavigation.navigateToAppDevScratchPad(routerStore);*/}
            {/*      }}>*/}
            {/*    Go mock some stuff <span*/}
            {/*      role={'img'}*/}
            {/*      aria-labelledby={'navigateToAppDevScratchPad'}>😏️😏️😌️</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <View>
              <Text
                  // href={'/'}
                 // onPress={_ => {
                 //   // _.preventDefault();
                 //   authStore.handleLogout();
                 // }}
              >Logout</Text>
            </View>
          </ScrollView>
        </View>
      </SafeComponentWrapper>
  );

}
