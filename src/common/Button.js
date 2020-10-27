import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        height: 70,
        width: '40%',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        borderRadius: 5
    }
});

export default Button;
