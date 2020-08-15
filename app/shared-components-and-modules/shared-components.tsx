import React from "react";
import RN from 'react-native';

export function BlankSpaceDivider(props) {
    let {height} = props;
    return (
        <RN.View
            style={{
                height: height || 10,
                width: '100%'
            }}
        />
    );
}

export function LineDivider(props) {
    let {height, backgroundColor} = props;
    return (
        <RN.View
            style={{
                height: height || 5,
                width: '100%',
                backgroundColor: backgroundColor || 'grey'
            }}
        />
    );
}
