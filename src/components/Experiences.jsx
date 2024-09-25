import React from 'react'
import { grid1 } from '../assets/data'

const Experiences = () => {
  return (
    <section>
      <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:gap-36 items-center'>
        <div>
          <img src={grid1} alt="" />
        </div>
        <div className='space-y-3'>
          <h4 className='text-gold'>EXPERIENCES</h4>
          <h3 className='font-bold'>We Provide You The <br /> Best Experience</h3>
          <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an 
            divelegant and lucurious style and with premium quality materials</p>
          <div className='items-center space-x-3 text-gold'>
            <span>More info</span>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences