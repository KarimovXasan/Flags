import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className='container flex items-center justify-between hidden md:block lg:block'>
        <div>
          <p className='text-2xl font-normal'>Panto</p>
        </div>
        <div>
          <ul className='flex space-x-8'>
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className='items-center space-x-1 px-2 py-2'>
          <i class="bi bi-bag-fill"></i>
            <span className='py-1 px-1 rounded-full border items-center '>0</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar