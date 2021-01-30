import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='w-full flex justify-center justify-items-center text-gray-700 mt-40'>
            <div className='w-1/3 p-4 border border-gray-200 bg-gray-50 text-center space-y-2'>
                <p>Continue With</p>
                <Link to='/heir' className='w-full border border-gray-100 p-2 flex'>
                    <div>
                        <img width='40' alt='google Icon' src='https://avatars1.githubusercontent.com/u/7328930?v=4' />
                    </div>
                    <div className='flex items-center'>
                       Google
                    </div>

                </Link>
            </div>
        </div>
    )
}