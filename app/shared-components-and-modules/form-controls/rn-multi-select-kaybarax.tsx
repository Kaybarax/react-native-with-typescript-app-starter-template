import React from "react";
import RN, {Alert} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import className from "../../util/react-native-based-utils";
import {
    AlignLeftTextCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexContainerChildItemWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import {Spacer} from "../shared-components";
import {isEmptyArray, isEmptyString, isNullUndefined, isTrue, makeId} from "../../util/util";
import {toJS} from "mobx";

export default function RnMultiSelectKaybarax(props) {

    console.log('PROPS IN RnMultiSelectKaybarax', toJS(props));

    let [state, set_state] = React.useState({
        selectedItems: isEmptyArray(props.selectedItems) ? [] : [...props.selectedItems],
        itemsList: isEmptyArray(props.itemsList) ? [] : [...props.itemsList],
        selectItems: props.selectItems || false,
    });

    function onItemSelected(value) {
        let itemsList = state.itemsList;
        let selectedItems = state.selectedItems;
        let item = itemsList.find(item => item.value === value);
        console.log('onItemSelected itemsList', itemsList);
        console.log('onItemSelected selectedItems', selectedItems);
        isEmptyArray(selectedItems) && (selectedItems = []);
        if (!isNullUndefined(item)) {
            selectedItems.push(item);
            let idx = itemsList.indexOf(item);
            itemsList.splice(idx, 1);
        }
        state.selectedItems = [...selectedItems];
        state.itemsList = [...itemsList];
        console.log('onItemSelected itemsList END!', state.itemsList);
        console.log('onItemSelected selectedItems END!', state.selectedItems);
        //update parent first
        props.onItemSelected(value);
        //after parent has re-rendered child, update child
        set_state(state);
    }

    function onItemRemoved(value) {
        let itemsList = state.itemsList;
        let selectedItems = state.selectedItems;
        isNullUndefined(selectedItems) && (selectedItems = []);
        let item = selectedItems.find(item => item.value === value);
        if (!isNullUndefined(item)) {
            itemsList.push(item);
            let idx = selectedItems.indexOf(item);
            selectedItems.splice(idx, 1);
        }
        state.selectedItems = [...selectedItems];
        state.itemsList = [...itemsList];
        set_state(state);
        props.onItemRemoved(value);
    }

    let initDropdown = () => {
        state.selectItems = true;
        set_state(state);
        props.initDropdown(true);
    };

    let closeDropdown = () => {
        state.selectItems = false;
        set_state(state);
        props.initDropdown(false);
    };

    return (
        <RN.ScrollView
            style={[
                className(FlexColumnContainerCN)
            ]}
        >

            <RN.TouchableOpacity
                style={[
                    className(FlexFluidRowContainerCN,
                        AllViewsCN),
                    {
                        backgroundColor: 'white'
                    }
                ]}
            >

                <RN.TouchableOpacity
                    activeOpacity={.2}
                    onPress={initDropdown}
                    style={[
                        className(FlexColumnContainerCN,
                            FlexContainerChildItemWidthCN('80%')),
                        {
                            backgroundColor: 'white',
                            borderRadius: 15
                        }
                    ]}
                >
                    <RN.View
                        style={[
                            {
                                height: 46
                            },
                            className(FlexFluidRowContainerCN)
                        ]}
                    >

                        <RN.View
                            style={[
                                className(FlexContainerChildItemFullWidthCN)
                            ]}
                        >

                            {
                                !isEmptyArray(state.selectedItems)
                                && (
                                    state.selectedItems.map(item => {
                                        let boundOnClearItem = onItemRemoved;
                                        return (
                                            <RN.View
                                                style={[
                                                    className(FlexFluidRowContainerCN)
                                                ]}
                                                key={makeId(16)}
                                            >

                                                <Spacer/>

                                                <RN.TouchableOpacity
                                                    activeOpacity={.2}
                                                    style={{
                                                        backgroundColor: "#FFFFFF"
                                                    }}
                                                    onPress={initDropdown}
                                                >
                                                    <RN.Text
                                                        style={{
                                                            color: "#929fb2",
                                                            // fontFamily: "OpenSans-Regular",
                                                            fontSize: 14,
                                                            textAlign: "center",
                                                            paddingTop: 10
                                                        }}
                                                    >
                                                        {item.label || item.text}
                                                    </RN.Text>
                                                </RN.TouchableOpacity>

                                                <Spacer/>

                                                <RN.TouchableOpacity
                                                    activeOpacity={.2}
                                                    style={[
                                                        {
                                                            backgroundColor: "#FFFFFF"
                                                        }
                                                    ]}
                                                    onPress={boundOnClearItem.bind(null, item.value)}
                                                >
                                                    <RN.Text>
                                                        <FontAwesomeIcon
                                                            icon={faTimes}
                                                            color={'#E0E0E0'}
                                                            size={30}
                                                        />
                                                    </RN.Text>
                                                </RN.TouchableOpacity>

                                            </RN.View>
                                        );
                                    })
                                )
                            }

                            {
                                isEmptyArray(state.selectedItems) &&
                                <RN.View
                                    style={[
                                        className(FlexFluidRowContainerCN)
                                    ]}
                                >

                                  <RN.TouchableOpacity
                                      activeOpacity={.2}
                                      style={[
                                          className(FlexContainerChildItemWidthCN('100%'),
                                              AllViewsCN)
                                      ]}
                                      onPress={initDropdown}
                                  >
                                    <RN.Text
                                        style={[
                                            {
                                                color: "#808A9D",
                                                fontSize: 14,
                                                paddingTop: 10
                                            },
                                            className(AlignLeftTextCN)
                                        ]}
                                    >
                                      Select
                                    </RN.Text>
                                  </RN.TouchableOpacity>

                                </RN.View>
                            }

                        </RN.View>

                    </RN.View>

                    <RN.Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={!!isTrue(state.selectedItems)}
                        onRequestClose={() => {
                        }}
                    >

                        <RN.View
                            style={[
                                className(FlexColumnContainerCN),
                                {
                                    backgroundColor: "#fff",
                                    padding: 2,
                                    elevation: 5,
                                    zIndex: (props["zIndez"] || 1000000)
                                }
                            ]}
                        >

                            <RN.ScrollView
                                style={[]}
                            >

                                <RN.TouchableOpacity
                                    style={[
                                        {
                                            padding: 5,
                                            backgroundColor: "#FFFFFF"
                                        }
                                    ]}
                                    activeOpacity={.2}
                                    onPress={closeDropdown}
                                >
                                    <RN.Text
                                        style={[
                                            {
                                                color: "#929fb2",
                                                // fontFamily: "OpenSans-Regular",
                                                fontSize: 14,
                                                paddingTop: 5
                                            },
                                            className(AlignLeftTextCN)
                                        ]}
                                    >
                                        EXIT SELECTION
                                    </RN.Text>
                                </RN.TouchableOpacity>

                                {
                                    isTrue(state.selectItems) &&
                                    !isEmptyArray(state.itemsList) && (
                                        state.itemsList.map((item, i) => {
                                            console.log('state.selectItems bgg')
                                            let boundOnPress = onItemSelected;
                                            return (
                                                <RN.TouchableOpacity
                                                    style={[
                                                        {
                                                            padding: 5,
                                                            backgroundColor: `${(i % 2) === 0 ? "#FFFFFF" : "#ADBECF"}`
                                                        }
                                                    ]}
                                                    activeOpacity={.5}
                                                    onPress={boundOnPress.bind(null, item.value)}
                                                    key={makeId(16)}
                                                >
                                                    <RN.Text
                                                        style={[
                                                            {
                                                                color: "#929fb2",
                                                                // fontFamily: "OpenSans-Regular",
                                                                fontSize: 14,
                                                                paddingTop: 10
                                                            },
                                                            className(AlignLeftTextCN)
                                                        ]}
                                                    >
                                                        {item.label || item.text}
                                                    </RN.Text>
                                                </RN.TouchableOpacity>

                                            );
                                        })
                                    )
                                }

                            </RN.ScrollView>

                        </RN.View>

                    </RN.Modal>

                </RN.TouchableOpacity>

                <RN.TouchableOpacity
                    activeOpacity={.2}
                    style={[
                        {
                            backgroundColor: "teal"
                        },
                        className(FlexContainerChildItemWidthCN('18%'),
                            AllViewsCN)
                    ]}
                    onPress={closeDropdown}
                >
                    <RN.Text>
                        <FontAwesomeIcon
                            icon={faTimes}
                            color={'#000000'}
                            size={30}
                        />
                    </RN.Text>
                </RN.TouchableOpacity>

            </RN.TouchableOpacity>

        </RN.ScrollView>
    );

}

/**
 * Helps with on-screen logging of json data
 * @param commentary
 * @param data
 */
function jsonAlertLog(commentary, data) {
    if (isEmptyString(commentary))
        Alert.alert('Data', JSON.stringify(data));
    else
        Alert.alert('Data' + commentary, JSON.stringify(data));
}
