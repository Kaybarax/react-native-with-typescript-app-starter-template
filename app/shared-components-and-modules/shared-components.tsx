import React from "react";
import RN from 'react-native';
import {makeId} from "../util/util";

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

export function Spacer(props) {
    let {spaces = 0} = props;
    return (
        <RN.Text>
            {(spaces === 0) && <RN.Text>&nbsp;</RN.Text>}
            {(spaces > 0) && (
                (_ => {
                    let nbsp: any = [];
                    for (let i = spaces; i > 0; i--) {
                        nbsp.push(<RN.Text key={makeId(16)}>&nbsp;</RN.Text>);
                    }
                    return nbsp;
                })()
            )}
        </RN.Text>
    );
}

Spacer.props = {
    spaces: 0
};

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
