import React from "react";
import PropTypes from 'prop-types';
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";
import {StyleSheet, Text, View} from "react-native";

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            hasError: false
        };
    }

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Loader failing!!</Text>;
        }
        // @ts-ignore
        let message = this.props.message;
        return (
            <View style={styles.container}>
                <OrientationLoadingOverlay
                    visible={true}
                    color={"#EDDFF6"}
                    indicatorSize={"large"}
                    messageFontSize={24}
                    message={message}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});
