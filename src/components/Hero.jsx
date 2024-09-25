import React from 'react'
//21:33 boshladim 21:45 tugadi
const Hero = () => {
  return (
    <section>
      <div className='container space-y-4 mb-80 mt-8'>
        <div>
          <h1 className='text-center'>Make your interior more
            minimalistic & modern</h1>
        </div>
        <div>
          <h4 className='text-center text-gray-600'>
          Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed
          </h4>
        </div>
        <div className='flex-row text-center'>
          <input type="text" placeholder='Search furniture' className='bg-gray py-4 px-5 rounded-[42px]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero