import React, { Fragment } from 'react'
import Statistics from './Statistics'
import {  useSelector} from 'react-redux'
import ExpenseWrapper from './ExpenseWrapper'
import Modal from './Modal'

export default function Main() {
    const state = useSelector(state => state.modal);
    const {open} = state;
    return (
        <Fragment>
            <div className='w-full max-h-full overflow-y-auto m-0 p-0 relative'>
                <Statistics />
                <ExpenseWrapper />
            </div>
            {open ? <Modal />:<></>}
        </Fragment>
    )
}
