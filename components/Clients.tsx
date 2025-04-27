import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { testimonials } from '@/data'

const Client = () => {
  return (
    <div>
          <div className="py-20" id='projects'>
      <h1 className='heading'>
        Kind words from 
        <span className='text-purple'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center'></div>
      <div className='h-[50vh] md:h-[30vh] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
       <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow'
      />
      </div>
    </div>
    </div>
  )
}

export default Client
