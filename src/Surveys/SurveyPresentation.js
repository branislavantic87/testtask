import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';


const SurveyPresentanion = (props) => (
    <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.headingTextStyle}>{props.survey.name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeadingStyle}>Description: </Text>
            <Text style={styles.descriptionTextStyle}>{props.survey.description}</Text>
        </View>
        <View style={styles.buttonContainerStyle}>
            <Button onPress={() => props.navigation.replace('Survey', { survey: props.survey })}>Start</Button>
        </View>
    </View>
)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    descriptionContainer: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        margin: 5,
        padding: 10
    },
    buttonContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingTextStyle: {
        fontSize: 32,
        textAlign: 'center'
    },
    descriptionTextStyle: {
        fontSize: 24,
        textAlign: 'justify'
    },
    descriptionHeadingStyle: {
        fontSize: 24,
        color: 'gray'
    }
})

export default SurveyPresentanion;