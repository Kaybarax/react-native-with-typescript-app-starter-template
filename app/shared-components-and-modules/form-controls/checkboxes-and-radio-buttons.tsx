//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {Text} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import RadioForm from 'react-native-simple-radio-button';

export function Radiobutton(props) {
    let {
        onRadioItemSelectChange, model,
        modelKey, radio_props
    } = props;

    const [radio, selectRadio] = React.useState(0);

    return (
        <RadioForm
            radio_props={radio_props}
            initial={radio}
            onPress={(value) => {
                selectRadio(value);
                onRadioItemSelectChange(model, modelKey, value);
            }}
        />
    );

}

export function Checkbox(props) {
    let {
        label, onCheckBoxChange,
        model, modelKey
    } = props;

    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

    return (
        <React.Fragment>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(value) => {
                    setToggleCheckBox(value);
                    onCheckBoxChange(model, modelKey, value);
                }}
            />
            <Text>{label}</Text>
        </React.Fragment>
    );

}
