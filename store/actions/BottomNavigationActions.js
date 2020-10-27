import { CHANGE_TAB_NAV } from "./types"


export const changeActiveTab = (payload) => {
    return {
        type: CHANGE_TAB_NAV,
        payload
    }
}