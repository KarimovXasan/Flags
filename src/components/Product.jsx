import React from 'react'
import { product } from '../assets/data'
// boshlandi 22:08 tugadi 21:49
const Product = () => {
  return (
    <section>
      <div className='container mt-24 mb-52'>
        <div className='text-center'>
          <h2>Best Selling Product</h2>
        </div>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {product.map(i => {
            return (
              <li>
                <img className='w-[240px] h-[280px]' src={i.img} alt="" />
                <p>{i.category}</p>
                <h4>{i.title}</h4> 
                <b>{i.price}</b>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Product