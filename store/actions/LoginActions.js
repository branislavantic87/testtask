import { LOGIN_TEXT_CHANGED } from "./types"


export const loginChanged = (payload) => {
    return {
        type: LOGIN_TEXT_CHANGED,
        payload
    }
}