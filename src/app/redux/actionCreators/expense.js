import { ADD_EXPENSE } from '../actionTypes/expense'
export const addNewExpense=(payload)=>{
  return {type:ADD_EXPENSE,payload:payload}
}
