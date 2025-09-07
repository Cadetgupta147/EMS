import React from 'react'

const SummaryCard = ({icon,text,number,color}) => {
  return (
    <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg'>
        <div className={`${color} flex items-center justify-center rounded h-full w-1/6`}>
            {icon}
        </div>
        <div className='flex flex-col items-start justify-center p-2'>
            <h4 className='text-2xl'>{text}</h4>
            <p className='font-bold text-xl'>{number}</p>
        </div>
    </div>
  )
}

export default SummaryCard