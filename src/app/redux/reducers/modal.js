import { Switch } from "react-router-dom";

import { TOGGLE_MODAL } from '../actionTypes/modal'
import { ADD_EXPENSE } from '../actionTypes/expense'
const modal = (state = { open: false, loading: false }, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return { ...state, open: action.payload }
        case ADD_EXPENSE:
            return { ...state, open:false }
        default:
            return state;
    }
}
export default modal;