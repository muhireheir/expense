import React from 'react'

export default function SingleExpense({item,date,price}) {
    return (
        <div className='w-full'>
              <div className='px-1 py-2 bg-gray-100 text-gray-600 flex justify-between'>
           <div>
           <p className='text-md'>{item}</p>
           <p className='text-sm'>RWF {price}</p>
           </div>
           <div>
           <p className='text-xs'>{date}</p>
           </div>
        </div>
        </div>
    )
}
