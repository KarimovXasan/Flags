import React from 'react'
//boshlandi 21:57 22:08 tugadi
const Choosing = () => {
  return (
    <section>
      <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:space-x-5 sm:space-y-3 lg:space-x-10 items-center'>
        {/* 1chi stolbik */}
        <div>
          <h3>Why
            Choosing Us</h3>
        </div>
        {/* 2chi stolbik */}
        <div>
          <h4>Luxury facilities</h4>
          <p className='text-gray'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          <div className='items-center space-x-3 text-gold'>
            <span>More info</span>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
        {/* 3chi stolbik */}
        <div>
          <h4>
            Affordable Price
          </h4>
          <p className='text-gray'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
          <div className='items-center space-x-3 text-gold'>
            <span>More info</span>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
        {/* 4chi stolbik */}
        <div>
          <h4>Many Choices</h4>
          <p className='text-gray'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
          <div className='items-center space-x-3 text-gold'>
            <span>More info</span>
            <span><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choosing