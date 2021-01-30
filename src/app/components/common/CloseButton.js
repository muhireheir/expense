import React from 'react'

export default function SubmitButton({label,type,onclick}) {
    return (
        <div className='w-1/2 pb-1 space-y-1'>
            <button type={type} onClick={onclick} className='block bg-gradient-to-r text-white to-red-400 from-red-600 w-full h-10 rounded border border-indigo-200 focus:outline-none pl-3 text-sm'>
                {label}
            </button>
        </div>
    )
}
