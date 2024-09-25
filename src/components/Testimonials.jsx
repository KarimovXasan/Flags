import React from 'react'
import { odam } from '../assets/data'

const Testimonials = () => {
  return (
    <section>
      <div className='container text-center'>
        <h4 className='text-gold'>TESTIMONIALS</h4>
        <h3>Our Client Reviews</h3>
      </div>
      <div>
        <div className='container grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-img1 w-full h-[476px] bg-cover bg-center rounded-2xl text-center px-2 py-12'>
          </div>
          <div className='bg-img2 h-[476px] bg-cover bg-center rounded-2xl'>

          </div>
          <div className='bg-img3 h-[476px] bg-cover bg-center rounded-2xl'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials