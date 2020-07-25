//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React, {Component} from 'react';
import SafeComponentWrapper from '../safe-component-wrapper';
import {Button, Image, Text, View} from "react-native";

export default class NotFound extends Component {
  static routeName = 'not-found';
  static routePathPattern = '/not-found';

  render() {
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
                    // className="title"
                >
                  Oops! Sorry, Page Not Found
                </Text>
              </View>
            </View>
            <View style={{paddingTop: 40}}>
              <Button
                  // className="button"
                  title={'Return'}
                  onPress={() => {
                    //
                  }}
              />
            </View>
            <View>
              <Image
                  source={require('../media/images/_404_.png')}
              />
            </View>
          </View>
        </SafeComponentWrapper>
    );
  }
}
