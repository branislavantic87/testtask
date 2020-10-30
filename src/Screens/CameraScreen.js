import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { surveys } from '../../constants';

export default class CameraScreen extends Component {
    constructor() {
        super()
        this.state = { code: null }
    }

    barcodeRecognition = ({ barcodes }) => {
        // console.log('barcodes', barcodes)
        if (barcodes && barcodes.length) {
            const found = barcodes.find(barcode => surveys.find(survey => survey.id === barcode.data))
            if (found) {
                this.setState({ code: found.data })
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.code !== this.state.code) {
            Actions.SurvPresentation({ survey: surveys.find(element => element.id === this.state.code) })
        }
    }

    componentWillUnmount() {
        console.log('Componeneta se unmountovala')
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