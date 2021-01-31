import React from 'react'

export default function SubmitButton({label}) {
    return (
        <div className='w-1/2 pb-1 space-y-1'>
            <button type='submit' className='block bg-gradient-to-r text-white to-green-400 from-blue-500 w-full h-10 rounded border border-indigo-200 focus:outline-none pl-3 text-sm'>
                {label}
            </button>
        </div>
    )
}
