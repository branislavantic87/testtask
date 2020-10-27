import { LOGIN_ERROR, LOGIN_TEXT_CHANGED } from "../actions/types";


const initialState = { loginCredentials: '', error: '' }

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_TEXT_CHANGED:
            return { ...state, loginCredentials: action.payload }
        case LOGIN_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}