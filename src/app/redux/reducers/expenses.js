import { ADD_EXPENSE } from '../actionTypes/expense'

const Expense =(state=[],action)=>{
    switch (action.type) {
        case ADD_EXPENSE:
            return state.concat(action.payload);
        default:
            return state;
    }
}

export default Expense;