import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';


const ThankYouPage = () => (
    <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Thank you for you time</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button onPress={() => Actions.main({ type: 'reset' })}>EXIT</Button>
        </View>
    </View>
)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 32,
        textAlign: 'center'
    }
})

export default ThankYouPage;