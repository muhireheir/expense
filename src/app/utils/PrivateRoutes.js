import React from 'react'
import  { Redirect } from 'react-router-dom'
export default function PrivateRoutes({Component}) {
    const x= 2;
    return (
        <div className='w-full box-border sm:w-1/2 md:w-1/3 mx-auto p-0 border border-gray-500 rounded relative h-screen'>
            {x>100 ? <Redirect to='/login' /> : <Component />}
        </div>
    )
}

