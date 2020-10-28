import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

class MySurveysTab extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    touchableStyle: {
        flex: 1,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center'
    }
})

export default MySurveysTab;