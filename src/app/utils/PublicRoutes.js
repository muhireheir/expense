import React from 'react'
export default function publicRoutes({ Component }) {
    return (
        <div className='w-full h-screen box-border'>
            <div className='w-full h-full'>
                <Component />
            </div>
        </div>
    )
}
