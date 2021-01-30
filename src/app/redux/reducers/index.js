import expenses from './expenses';
import { combineReducers } from 'redux';
import modal from './modal';

const rootReducer =combineReducers({
    expenses,
    modal
})

export default rootReducer;