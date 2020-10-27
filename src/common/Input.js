import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
    return (
        <TextInput
            autoCorrect={false}
            value={props.value}
            autoCapitalize='none'
            onChangeText={props.onChangeText}
            underlineColorAndroid='transparent'
            placeholder={props.placeholder}
            placeholderTextColor='#ff0000'
            style={[styles.inputStyle, props.width ? { width: props.width } : { width: '80%' }]}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
        />
    )
};

const styles = {
    inputStyle: {
        color: '#ff0000',
        maxHeight: 50,
        paddingLeft: 5,
        // fontSize: 23,
        lineHeight: 18,
        flex: 1,
        borderColor: '#ff0000',
        borderWidth: 1,
    }
};

export default Input;
