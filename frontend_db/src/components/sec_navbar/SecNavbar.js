import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
import StarRating from '../stars/Stars'




const SecNavbar = (props) => {
  return (
    <nav>
      <div className='bg-[#8EE586] h-12 flex items-center px-5'>
        <div className='w-1/2 flex items-center flex-start gap-2'>
            <Link to='/'><i className="ri-arrow-left-circle-fill w-10 text-2xl"></i>
            </Link>
            
            <h1 className='text-lg font-bold'>{props.shopName}</h1>
        </div>
       
        <div className='ml-auto'>
            
        <StarRating  count={ props.rating}/>
        </div>
      </div>
    </nav>
  )
}

export default SecNavbar
