import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { surveys } from '../../constants';

export default class CameraScreen extends Component {

    barcodeRecognition = ({ barcodes }) => {
        const found = surveys.find(survey => barcodes.find(barcode => barcode.data === survey.id))
        if (found) {
            Actions.SurvPresentation({ survey: found })
        } else {
            Alert.alert('Alert', 'There is no survey with that id')
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <RNCamera
                    style={{ flex: 1, width: '100%' }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognition}
                />
            </View>
        )
    }
}