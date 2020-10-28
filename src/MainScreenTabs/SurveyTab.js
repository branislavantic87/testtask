import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';
import ModalComponent from '../common/ModalComponent';

class SurveysTab extends Component {
    constructor() {
        super();
        this.state = { isVisible: false }
    }

    toogleModal = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Button onPress={() => this.toogleModal()}>Choose survey</Button>
                <Button onPress={() => { }}>ScanQr code</Button>
                <ModalComponent isVisible={this.state.isVisible} toogleModal={this.toogleModal} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
    }
})

export default SurveysTab;