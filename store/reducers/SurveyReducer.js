import { ADD_DATA_FOR_SAVING, RESET_SURVEY_REDUCER, SET_ACTIVE_SURVEY, SET_LOCAL_SURVEYS } from "../actions/types";

const initialState = { activeSurvey: null, surveyToBeSaved: [], localSurveys: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_FOR_SAVING:
            return { ...state, surveyToBeSaved: [...state.surveyToBeSaved, action.payload] }
        case SET_ACTIVE_SURVEY:
            return { ...state, activeSurvey: action.payload }
        case SET_LOCAL_SURVEYS:
            return { ...state, localSurveys: action.payload }
        case RESET_SURVEY_REDUCER:
            return { ...state, activeSurvey: null, surveyToBeSaved: [] }
        default:
            return state;
    }
}