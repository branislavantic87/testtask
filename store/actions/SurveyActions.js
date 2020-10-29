import AsyncStorage from "@react-native-async-storage/async-storage"
import { ADD_DATA_FOR_SAVING, RESET_SURVEY_REDUCER, SET_ACTIVE_SURVEY, SET_LOCAL_SURVEYS } from "./types"


export const saveSignleQuestion = (payload) => {
    return {
        type: ADD_DATA_FOR_SAVING,
        payload
    }
}

export const setActiveSurvey = (payload) => {
    return {
        type: SET_ACTIVE_SURVEY,
        payload
    }
}

export const saveDataToAsyncStorage = () => async (dispatch, getState) => {
    try {
        const state = getState().surveyReducer;
        const dataForSaving = { survey: state.activeSurvey, data: state.surveyToBeSaved, date: new Date() }
        const savedSurveys = await AsyncStorage.getItem('@survey').then(res => JSON.parse(res))
        if (!savedSurveys) {
            const value = [dataForSaving]
            await AsyncStorage.setItem('@survey', JSON.stringify(value)).then(res => console.log(res))
        } else {
            const newSurveys = [...savedSurveys, dataForSaving]
            await AsyncStorage.setItem('@survey', JSON.stringify(newSurveys))
        }
        dispatch({ type: RESET_SURVEY_REDUCER })
    } catch (error) {
        console.log('Catch from saveDataToAsync ', error)
    }
}

export const getDataFromStorage = () => async (dispatch, getState) => {
    try {
        // console.log(new Date())
        // await AsyncStorage.removeItem('@survey')
        const allReadyInState = getState().surveyReducer.localSurveys.length
        const data = await AsyncStorage.getItem('@survey').then(res => JSON.parse(res));
        if (data && data.length !== allReadyInState) {
            dispatch({ type: SET_LOCAL_SURVEYS, payload: data })
        }
    } catch (error) {
        console.log('Catch from getDataFromStorage', error)
    }

}