import React from 'react'
import { stull } from '../assets/data'

const Materials = () => {
  return (
    <section>
      <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mt-64 lg:gap-64 items-center'>
        <div>
          <h4 className='text-gold'>MATERIALS</h4>
          <h3 className='font-bold	'>Very serious <br /> materials for making <br /> furniture</h3>
          <p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a <br /> relatively low price</p>
          <div className='items-center space-x-3 text-gold'>
            <span>More info</span>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
        <div>
          <img src={stull} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Materials