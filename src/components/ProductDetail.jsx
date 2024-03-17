import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../store/PostContext'
import Shimmer from './Shimmer'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../firebase/config'

const ProductDetail = () => {

   const {postDetails} = useContext(PostContext)
   console.log('iampostdetails',postDetails)
   const [user,setUser]=useState(null)

    const getUsers = async () => {
        const q = query(collection(db, 'Users'), where('uid', '==', postDetails.userId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            
            // Process the document data here
            setUser(doc.data());
        });
    }; 

   useEffect(()=>{

   getUsers()

   },[])


    console.log('iam user data yyyyyyy', user)

  return postDetails==null||user==null?(<Shimmer/>):(
    <div className='container mx-auto'>

          <img className='p-5 mx-auto object-cover' src={postDetails.imageUrl} alt="" />
          <div className='grid grid-cols-5 gap-5'>

            <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6'>
     
            <h1 className='text-4xl font-bold'>{postDetails.name}</h1>
            <h2>{postDetails.category}</h2>
            <p>{postDetails.location}</p>
            <p>{postDetails.createdAt}</p>
            </div>
              <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6'>
                <p className='text-xl underline mb-1'>Seller Details:</p>
                <h1 className='text-lg'>Seller name : {user.userName}</h1>
                <h1>Phone : {user.phone}</h1>
                <p>Seller ID : {user.uid}</p>
            </div>
              <div className='col-span-1 p-5 bg-gray-50 rounded-lg my-6' >
                  <h1 className='text-4xl font-bold text-center py-5'>₹ {postDetails.price}</h1>
                  <button className='bg-green-950 text-white w-full rounded-lg font-semibold py-3'>Buy Product</button>
              </div>

          </div>

        

    </div>
  )
}

export default ProductDetail