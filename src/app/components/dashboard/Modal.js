import React,{useState} from 'react'
import InputField from '../common/InputField'
import SubmitButton from '../common/SubmitButton'
import CloseButton from '../common/CloseButton'
import { useDispatch } from 'react-redux'
import { TOGGLE_MODAL } from '../../redux/actionTypes/modal'
import { addNewExpense } from '../../redux/actionCreators/expense'
export default function Modal() {
    const [state, setstate] = useState({expense:'',price:'',date:''});
    const {item,price,date} = state;
    const dispatch = useDispatch();
    const OnfieldChange =(e)=>{
        setstate({...state,[e.target.name]:e.target.value});
    }
    const closeModal =()=>{
       dispatch({type:TOGGLE_MODAL,payload:false});
    }
    const addNewItem=(e)=>{
      e.preventDefault();
      dispatch(addNewExpense(state));
    }
    return (
        <div className='w-full h-screen absolute bg-modalBg top-0 box-border pt-12'>
            <div className='bg-gray-200 h-auto w-modalWidth mx-auto rounded-md py-5 px-3'>
                <form onSubmit={addNewItem}>
                    <InputField name='expense'  value={item} label='Item Name' onInput={OnfieldChange} />
                    <InputField name='price' value={price} label='Total Price' onInput={OnfieldChange} />
                    <InputField name='date'  value={date} label='Exp Date' onInput={OnfieldChange} />
                    <div className='flex'>
                        <SubmitButton type='submit' label='Save Expense' />
                        <CloseButton onclick={closeModal} type='button' label='Close' />
                    </div>
                </form>
            </div>
        </div>
    )
}
