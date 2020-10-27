import { CHANGE_TAB_NAV } from "../actions/types";

const mainActiveTab = { name: 'Surveys', nav: 'surveys' };

const initialState = { activeTab: mainActiveTab }

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB_NAV:
            return { ...state, activeTab: action.payload }
        default:
            return state;
    }
}