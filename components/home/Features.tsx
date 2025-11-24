import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col gap-8 items-center'>
        <h2 className='text-4xl font-semibold max-w-[500px] text-center leading-12'>
            Powerful Features to Transform Realtors Journey
        </h2>
        <div className='grid grid-cols-2 gap-4 w-7xl rounded-lg p-6'>
            <div className='flex flex-col gap-4 '>
                <div className='w-full bg-gray-300 h-80 rounded-2xl sticky top-20 border-t-black border-t '></div>
                <div className='w-full bg-gray-300 h-80 rounded-2xl sticky top-25 border-t-black border-t '></div>
                <div className='w-full bg-gray-300 h-80 rounded-2xl sticky top-30 border-t-black border-t '></div>
                <div className='w-full bg-gray-300 h-80 rounded-2xl sticky top-35 border-t-black border-t '></div>
                <div className='w-full bg-transparent h-80 rounded-2xl sticky  top-40 '></div>
            </div>
            <div>
                <div className='w-full bg-gray-300 h-150 rounded-2xl sticky top-20'></div>
            </div>
        </div>
        <div className='h-400'>

        </div>
    </div>
  )
}

export default Features
