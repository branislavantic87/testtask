import { ADD_DATA_FOR_SAVING, SET_ACTIVE_SURVEY } from "../actions/types";

const initialState = { activeSurvey: null, survetyToBeSaved: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_FOR_SAVING:
            return { ...state, survetyToBeSaved: [...state.survetyToBeSaved, action.payload] }
        case SET_ACTIVE_SURVEY:
            return { ...state, activeSurvey: action.payload }
        default:
            return state;
    }
}