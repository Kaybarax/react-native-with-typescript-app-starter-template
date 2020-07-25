//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import {inject, observer} from "mobx-react";
import SafeComponentWrapper from "../../safe-component-wrapper";
import HeaderNavigation from "../../shared-components-and-modules/header-navigation";
import {isNullUndefined} from "../../util/util";
import {SOs_and_Credits_List} from "../../app-management/data-manager/list-manager";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import appNavigation from "../../routing-and-navigation/app-navigation";
import {Image, Text, View} from "react-native";

function Page4SubItemExample(props) {

  const {
    appStore,
    authStore,
    routerStore
  } = props;

  let {item} = routerStore.routerState.params;
  let person = SOs_and_Credits_List.find(it => it.person === item);

  if (isNullUndefined(person)) {
    return (
        <SafeComponentWrapper>

          <View
              // className="container is-fluid"
          >

            <View
                // className={'flex-row-container'}
            >
              <View
                  // className={'flex-container-child-item center-align-content'}
              >
                <Text
                    // h5
                    // className="title is-5"
                >
                  No user details
                </Text>
              </View>
            </View>

            <View>
              <Text
                  // className="button is-info"
                  // onPress={_ => {appNavigation.navigateToPage4Example(routerStore, null);}}
              >Go back</Text>
            </View>
            <Text>{'\n'}</Text>
          </View>
        </SafeComponentWrapper>
    )
  }

  return (
      <SafeComponentWrapper>
        <HeaderNavigation
            routerStore={routerStore}
            authStore={authStore} appStore={appStore}
        />

        <View
            // className="container is-fluid"
        >

          <View
              // className={'flex-row-container'}
          >
            <View
                // className={'flex-container-child-item center-align-content'}
            >
              <Text
                  // h5
                  // className="title is-5"
              >
                Page 4 Item Example : Accredited Details
              </Text>
            </View>
          </View>

          <View
              // className="columns"
          >
            <View
                // className="column is-full is-primary"
            >
              <View
                  // className="card"
              >
                <View
                    // className="card-image"
                >
                  <View
                      // className="image is-4by3"
                  >
                    <Image
                        source={require("../../media/images/image.png")}
                         // alt="Placeholder image"
                    />
                  </View>
                </View>
                <View
                    // className="card-content"
                >
                  <View
                      // className="media"
                  >
                    <View
                        // className="media-left"
                    >
                      <View
                          // className="image is-48x48"
                      >
                        <Image
                            source={require("../../media/images/image.png")}
                            //  alt="Placeholder image"
                        />
                      </View>
                    </View>
                    <View
                        // className="media-content"
                    >
                      <Text
                          // className="title is-4"
                      >
                        {person && person.person}
                      </Text>
                      <Text
                          // className="subtitle is-6"
                      >
                        <Text
                            // href={person.links[0].link} target={'_blank'}
                        >
                          @{person && person.links[0].site}
                        </Text>
                      </Text>
                    </View>
                  </View>

                  <Text
                      // className="content"
                  >
                    {person && person.attribution}&nbsp;<Text>{'\n'}</Text>
                    <a
                        // href={person.links[1].link} target={'_blank'}
                    >
                      {person && person.links[1].site}
                    </a>
                    <Text>{'\n'}</Text>
                    Touch-ups here with <Text
                      // href={'https://bulma.io'} target={'_blank'}
                  >
                    @bulmaio
                  </Text>&nbsp;
                    <Text
                        // href=""
                    >
                      #css
                    </Text> <Text
                      // href=""
                  >
                    #responsive
                  </Text>&nbsp;
                    <Text
                        // className="button is-small"
                    >
                      <FontAwesomeIcon icon={faCoffee}/>
                    </Text>
                    <Text>{'\n'}</Text>
                    <Text>
                      {(new Date()).toLocaleDateString()}
                    </Text>
                  </Text>
                </View>
              </View>

            </View>
          </View>

          <View>
            <Text
                // className="button is-info"
                onPress={_ => {appNavigation.navigateToPage4Example(routerStore, null);
            }}
            >Go back</Text>
          </View>
          <Text>{'\n'}</Text>

        </View>

      </SafeComponentWrapper>
  );

}

export default (inject('authStore', 'appStore', 'routerStore')(observer(Page4SubItemExample)));
