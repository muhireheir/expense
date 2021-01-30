import React, { Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { TOGGLE_MODAL } from '../../redux/actionTypes/modal' 
export default function AddButton() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.modal);
    const {open} = state;
    const toggleModal =()=>{
        dispatch({type:TOGGLE_MODAL,payload:!open})
    }
    return (
        <Fragment>
            <button onClick={toggleModal} className='focus:outline-none absolute text-lg right-3 top-24 rounded-full text-white border border-white h-12 w-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'>
                +
           </button>
        </Fragment>
    )
}
