import React from 'react'

export default function InputField({label,name,onInput}) {
    return (
        <div className='w-full pb-1 space-y-1'>
            <label className='text-sm block text-indigo-500'>{label}</label>
            <input onChange={onInput} name={name} type='text' className='block w-full h-10 rounded border border-indigo-200 focus:outline-none pl-3 text-sm' />
        </div>
    )
}
