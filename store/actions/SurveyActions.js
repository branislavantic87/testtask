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
    const state = getState();
    console.log(state)
    
}