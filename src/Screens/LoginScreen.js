import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { loginChanged } from '../../store/actions';
import Input from '../common/Input';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainer}>
                    <Input />
                </View>
                <View style={styles.emptyContainer}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    textInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyContainer: {
        flex: 1
    },
})

const mapStateToProps = state => {
    return {
        loginCredentials: state.loginReducer.loginCredentials
    }
}

export default connect(mapStateToProps, { loginChanged })(LoginScreen)