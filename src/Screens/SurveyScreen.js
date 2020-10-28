import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import { saveDataToAsyncStorage, saveSignleQuestion, setActiveSurvey } from '../../store/actions/SurveyActions';
import Button from '../common/Button';
import ThankYouPage from '../Surveys/ThankYouPage';


class SurveyScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            questionIndex: 0,
            selectedIndex: null,
            surveyFinished: false
        }
    }

    componentDidMount() {
        this.props.setActiveSurvey(this.props.survey.name)
    }

    onPress = (selectedIndex) => {
        this.setState({ selectedIndex })
    }

    changeQuestionIndex = (data) => {
        this.props.saveSignleQuestion(data)
        if (this.props.survey.questions.length !== this.state.questionIndex + 1) {
            this.setState({ questionIndex: this.state.questionIndex + 1, selectedIndex: null })
        } else {
            this.props.saveDataToAsyncStorage()
            this.setState({ surveyFinished: true })
        }
    }

    renderQuestions = (questions) => {
        return questions.map((element, i) => {
            return <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                    obj={{ label: element, value: i }}
                    index={i}
                    isSelected={this.state.selectedIndex === i}
                    onPress={this.onPress}
                    borderWidth={1}
                    buttonInnerColor={'#000'}
                    buttonOuterColor={this.state.selectedIndex === i ? '#000' : '#000'}
                    buttonSize={30}
                    buttonOuterSize={40}
                    buttonStyle={{ margin: 20 }}
                    buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                    obj={{ label: element, value: i }}
                    index={i}
                    labelHorizontal={true}
                    onPress={this.onPress}
                    labelStyle={{ fontSize: 20, color: '#000' }}
                />
            </RadioButton>
        })
    }

    render() {
        const data = this.props.survey.questions[this.state.questionIndex];
        return (
            !this.state.surveyFinished ?
                <View style={styles.mainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.headeinTextSyle}>{data.questionTitle}</Text>
                    </View>
                    <View style={styles.answersContainer}>
                        {this.renderQuestions(data.answers)}
                    </View>
                    <View style={styles.buttonContainer} >
                        <Button onPress={() => this.changeQuestionIndex({ quesiton: data.questionTitle, answer: data.answers[this.state.selectedIndex] })} disabled={this.state.selectedIndex === null}>Next</Button>
                    </View>
                </View >
                :
                <ThankYouPage />
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    titleContainer: {
        flex: 0.7,
        justifyContent: 'center',
        padding: 5,
        width: '100%'
    },
    answersContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 30
    },
    headeinTextSyle: {
        fontSize: 32,
    }
})

const mapStateToProps = state => {
    return {
        surveyToBeSaved: state.surveyReducer.surveyToBeSaved,
        activeSurvey: state.surveyReducer.activeSurvey
    }
}

export default connect(mapStateToProps, { saveSignleQuestion, setActiveSurvey, saveDataToAsyncStorage })(SurveyScreen)