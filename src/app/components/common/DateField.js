import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InputField({ label, name }) {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div className='w-full pb-1 space-y-1'>
            <label className='text-sm block text-indigo-500'>{label}</label>
            <DatePicker  name={name} className='block w-full h-10 rounded border border-indigo-200 focus:outline-none pl-3 text-sm' selected={startDate} onChange={date => setStartDate(date)} />
        </div>
    )
}
