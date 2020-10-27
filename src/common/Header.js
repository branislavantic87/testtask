import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ header }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headerTextStyle}>{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 0.3
    },
    headerTextStyle: {
        color: '#000',
        fontSize: 18
    }
})

export default Header;