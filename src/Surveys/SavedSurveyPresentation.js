import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../common/Header';


const _renderItem = ({ item, data }) => {
    return (
        <View style={styles.itemContainerStyle}>
            <View style={styles.questionContainerStyle}>
                <Text>Question: </Text>
                <Text style={styles.questionTextStyle}>{item.quesiton}</Text>
            </View>
            <View style={styles.answerContainerStyle}>
                <Text>Answer: </Text>
                <Text>    {item.answer}</Text>
            </View>

        </View>
    )
}

const SavedSurveyPresentation = (props) => (
    <View style={styles.mainContainer}>
        <Header header={props.data.survey} />
        <FlatList
            data={props.data.data}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    questionContainerStyle: {
        flex: 1,
        padding: 5
    },
    answerContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    questionTextStyle: {
        fontSize: 18
    },
    itemContainerStyle: {
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    }
})

export default SavedSurveyPresentation;