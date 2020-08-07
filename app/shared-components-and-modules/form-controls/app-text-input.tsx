//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const AppTextInput = (props) => {
    let {onTextChange, label, value, secureTextEntry} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{`${label}`}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onTextChange}
                autoCorrect={false}
                secureTextEntry={secureTextEntry || false}
            />
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    input: {
        fontSize: 13,
        flex: 1,
        height: 42,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 18,
        padding: 10,
        backgroundColor: 'seashell'
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 8
    },
    error: {
        fontSize: 12,
        color: '#e74c3c'
    },
    errorContainer: {
        padding: 8
    }
});
