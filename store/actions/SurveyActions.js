import AsyncStorage from "@react-native-async-storage/async-storage"
import { ADD_DATA_FOR_SAVING, SET_ACTIVE_SURVEY } from "./types"


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
        const dataForSaving = { survey: state.activeSurvey, data: state.surveyToBeSaved }
        const savedSurveys = await AsyncStorage.getItem('@survey').then(res => JSON.parse(res))
        if (!savedSurveys) {
            const value = [dataForSaving]
            await AsyncStorage.setItem('@survey', JSON.stringify(value)).then(res => console.log(res))
        } else {
            const newSurveys = savedSurveys.push(dataForSaving);
            await AsyncStorage.setItem('@survey', JSON.stringify(newSurveys))
        }
    } catch (error) {
        console.log('Catch from saveDataToAsync ', error)
    }

}