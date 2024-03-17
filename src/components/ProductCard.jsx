import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PostContext } from '../store/PostContext'

const ProductCard = (props) => {

  const { name, price, location, imageUrl,fullProduct }=props

  const {setPostDetails}=useContext(PostContext)

  const handleClick=()=>{

      setPostDetails(fullProduct)
      
  }

  return (
     <div className='border border-gray-300 shadow-sm container mx-auto rounded-md'>

    <Link to={'/productDetail'}><div onClick={handleClick} className='m-2'>
     <div className='relative'>
       <img className='h-60 object-cover mx-auto'  src={imageUrl} alt="" />
              <div className='rounded-full bg-white absolute right-2 top-2 h-10 w-10 '>
                  <FaRegHeart className='mt-[11px] ml-[11px]' size={20} />
              </div>
              </div>
          <div className='my-3 mx-2'>
              <h1 className='font-bold text-2xl'>₹ {price}</h1>
              <p className='text-gray-500 mb-2'>{name} sale</p>
              <p className='text-xs text-gray-500'>{location.toUpperCase()}</p>
              </div>
      </div></Link>

    </div>
  )
}

export default ProductCard