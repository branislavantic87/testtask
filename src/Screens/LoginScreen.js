import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginChanged, handleLogin } from '../../store/actions';
import Button from '../common/Button';
import Input from '../common/Input';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.loginSectionWrapper}>
                    <View style={styles.textInputContainer}>
                        <Input
                            value={this.props.loginCredentials}
                            placeholder='Type 4 numbers in a row to login'
                            keyboardType={'numeric'}
                            onChangeText={text => this.props.loginChanged(text)}
                            maxLength={4}
                        />
                        <View style={styles.errorContainerStyles}>
                            {this.props.error !== '' && <Text style={styles.textStyles}>{this.props.error}</Text>}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={() => this.props.handleLogin(this.props.loginCredentials)}>
                            Login
                        </Button>
                    </View>
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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    errorContainerStyles: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyles: {
        color: 'red'
    },
    loginSectionWrapper: {
        flex: 1
    },
    emptyContainer: {
        flex: 1
    },
})

const mapStateToProps = state => {
    return {
        loginCredentials: state.loginReducer.loginCredentials,
        error: state.loginReducer.error
    }
}

export default connect(mapStateToProps, { loginChanged, handleLogin })(LoginScreen)