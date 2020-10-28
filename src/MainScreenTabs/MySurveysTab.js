import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { surveys } from '../../constants';

class MySurveysTab extends Component {

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => Actions.Survey({ survey: item })} style={styles.touchableStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={surveys}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
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