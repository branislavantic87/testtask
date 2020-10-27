import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    return (
        <TextInput
            autoCorrect={false}
            value={props.value}
            autoCapitalize='none'
            onChangeText={props.onChangeText}
            underlineColorAndroid='transparent'
            placeholder={props.placeholder}
            placeholderTextColor='gray'
            style={styles.inputStyle}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            returnKeyType='done'
            maxLength={props.maxLength}
        />
    )
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        color: '#000',
        maxHeight: 50,
        paddingLeft: 5,
        lineHeight: 18,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        textAlign: 'center'
    }
})

export default Input;
