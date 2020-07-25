//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import {inject, observer} from "mobx-react";
import SafeComponentWrapper from "../../safe-component-wrapper";
import HeaderNavigation from "../../shared-components-and-modules/header-navigation";
import {isEmptyArray} from "../../util/util";
import {SOs_and_Credits_List} from "../../app-management/data-manager/list-manager";
import appNavigation from "../../routing-and-navigation/app-navigation";
import {Image, Text, View} from "react-native";

function Page4Example(props) {

  const {
    appStore,
    authStore,
    routerStore
  } = props;

  const _viewAttributedPersonDetails = (e, person) => {
    // e.preventDefault();
    appNavigation.navigateToPage4SubItemExample(routerStore, {item: person})
  };

  return (
      <SafeComponentWrapper>
        <HeaderNavigation
            routerStore={routerStore}
            authStore={authStore} appStore={appStore}
        />

        <View
            //className={'flex-row-container'}
        >
          <View
              //className={'flex-container-child-item center-align-content'}
          >
            <h5
                //className="title is-5"
            >Page 4 Example : About me, and S/Os and credits</h5>
          </View>
        </View>

        <View
            //className={'flex-row-container'}
        >
          <View
              //className={'flex-container-child-item center-align-content'}
          >
            <Text style={{textAlign: 'left'}}>
              <Text
                  // strong
              >About me:</Text><Text>{'\n'}</Text>
              Hi. I'm Kevin Barasa. A full stack software engineer currently based in my hometown
              and&nbsp;
              country, Nairobi, Kenya. At this time of this build and writing (May, 2020), I have 3
              and&nbsp;a half years of professional (hired) software engineering experience, and 5 to 6 yrs
              of&nbsp;
              total software engineering experience, both professionally and personally.<Text>{'\n'}</Text>
              I'm especially, particularly well versed with <Text
                // i
            >Java</Text>, <Text
                // i
            >SQL
              (MySQL/OracleSQL)</Text>,&nbsp;
              <Text
                  // i
              >Javascript and web technologies</Text>, <Text
                // i
            >Mobile app development with React Native and
              Android</Text>,&nbsp;
              and I have, and can as well work with other languages and technologies like&nbsp;
              <Text
                  // i
              >Python, C++, C#, Dart, NoSQL Dbs, and AWS cloud</Text>.
              <Text>{'\n'}</Text><Text>{'\n'}</Text>

              <Text>Let's connect:</Text><Text>{'\n'}</Text>
              LinkedIn: <Text
                // href={'https://linkedin.com/in/kaybarax'} target={'_blank'}
            >Kevin Barasa
              (kaybarax)</Text><Text>{'\n'}</Text>
              Github: <Text
                // href={'https://github.com/Kaybarax'} target={'_blank'}
            >Kaybarax</Text><Text>{'\n'}</Text>
              Twitter: <Text
                // href={'https://twitter.com/Kaybarax'} target={'_blank'}
            >Kaybarax</Text>
              <Text>{'\n'}</Text><Text>{'\n'}</Text>

              <Text
                  // strong
              >Shout out's and credits:</Text><Text>{'\n'}</Text>

              <View
                  //className="flex-column-container"
              >
                {
                  !isEmptyArray(SOs_and_Credits_List) &&
                  SOs_and_Credits_List.map((item, i) => {

                    return (
                        <View key={i}
                              //className="flex-container-child-item-full-width"
                        >
                          <View
                              //className="flex-fluid-row-container"
                          >
                            <View
                                //className="flex-container-child-item-one-quarter-width"
                            >
                              <View
                                  //className=""
                              >
                                <View>
                                  <Image
                                      source={require('../../media/images/image.png')}
                                      // alt={'alt'}
                                      style={{
                                        width: 96,
                                        height: 96,
                                      }}
                                  />
                                  <View>
                                    <Text
                                        // href={item.links[0].link}
                                       // target={'_blank'}
                                       onPress={e => _viewAttributedPersonDetails(e, item.person)}
                                    >
                                      {item.person}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View
                                //className="flex-container-child-item-one-quarter-width"
                            >
                              <View
                                  //className=""
                              >
                                <Text>A little about {item.person}, click to view full details</Text>
                                <Image
                                    source={require('../../media/images/short-paragraph.png')}
                                    // alt={'alt'}
                                    style={{
                                      width: 520,
                                      height: 84,
                                    }}
                                    // onPress={e => _viewAttributedPersonDetails(e, item.person)}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                    );

                  })
                }

              </View>

            </Text>
          </View>
        </View>

      </SafeComponentWrapper>
  );

}

export default (inject('authStore', 'appStore', 'routerStore')(observer(Page4Example)));
