import React from 'react';
import { View, Text, Modal, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { surveys } from '../../constants';

const _renderItem = (item, toogle) => {
    return (
        <TouchableOpacity onPress={() => { Actions.Survey({ survey: item }); toogle() }} style={styles.touchableStyle}>
            <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const ModalComponent = props => (
    <Modal
        visible={props.isVisible}
        animationType={'slide'}
        onRequestClose={() => { console.log('Requested close') }}
        style={{ flex: 1 }}
    >
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.closeButtonStyle} onPress={() => props.toogleModal()}><Text style={styles.textStyle}>X</Text></TouchableOpacity>
            </View>
            <View style={styles.flatListContainerStyle}>
                <FlatList
                    data={surveys}
                    renderItem={({ item, index }) => _renderItem(item, props.toogleModal)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    </Modal >
)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 50
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 40,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    flatListContainerStyle: {
        flex: 1
    },
    touchableStyle: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: '#000',
        borderWidth: 0.5,
        margin: 5,
        borderRadius: 3
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center'
    },
    closeButtonStyle: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    }
})
export default ModalComponent;


