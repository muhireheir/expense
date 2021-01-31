import React ,{ useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import SingleExpense from './SingleExpense'

export default function ExpenseWrapper() {
    const [expenses,addExpense] = useState([]);
    const Expenses = useSelector(state=>state.expenses);
    useEffect(()=>{
        addExpense(Expenses)
    },[Expenses]);
    return (
        <div className='w-full h-full overflow-y-auto p-1 space-y-1'> 
            {expenses.map((SingleItem,i)=>(
               <SingleExpense key={i} item={SingleItem.expense} date={SingleItem.date} price={SingleItem.price}  />
            ))}
        </div>
    )
}
