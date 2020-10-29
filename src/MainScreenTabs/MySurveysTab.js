import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getDataFromStorage } from '../../store/actions';


class MySurveysTab extends Component {
    componentDidMount() {
        this.props.getDataFromStorage()
    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => Actions.SavedSurveyPresentation({ data: item })} style={styles.touchableStyle}>
                <View style={styles.mainContainer}>
                    <Text style={styles.textStyle}>{item.survey}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.dateTextStyle}>Questions: {item.data.length}</Text>
                    <Text style={styles.dateTextStyle}>{new Date(item.date).toLocaleString()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={this.props.localSurveys}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    touchableStyle: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: '#000',
        borderWidth: 0.5,
        margin: 5
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center'
    },
    noSurveysContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTextStyle: {
        fontSize: 14
    },
    infoContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        localSurveys: state.surveyReducer.localSurveys
    }
}

export default connect(mapStateToProps, { getDataFromStorage })(MySurveysTab);