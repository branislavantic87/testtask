import { Actions } from "react-native-router-flux";
import { LOGIN_ERROR, LOGIN_TEXT_CHANGED } from "./types"


export const loginChanged = (payload) => {
    return {
        type: LOGIN_TEXT_CHANGED,
        payload
    }
}

const isIncreasingSequence = (numbers) => {
    return numbers.every((number, i) => i === 0 || numbers[i - 1] == number - 1);
}

export const handleLogin = (value) => dispatch => {
    dispatch({ type: LOGIN_ERROR, payload: '' })
    const numbers = [...value];
    if (numbers.length < 4) {
        dispatch({ type: LOGIN_ERROR, payload: 'You have to enter 4 numbers' })
        return;
    }
    const isIncreasing = isIncreasingSequence(numbers)
    if (isIncreasing) {
        Actions.main({ type: 'reset' })
    } else {
        dispatch({ type: LOGIN_ERROR, payload: 'Your numbers are not increasing' })
    }
}
