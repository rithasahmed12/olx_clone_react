import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { db, storage } from '../firebase/config'
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
} from "firebase/storage";
import { toast } from 'react-toastify';
import { UserContext } from '../App';
import { addDoc, collection } from '@firebase/firestore';
import { checkValidData } from '../validation/sellProductValidate';

const SellProduct = () => {

    const [productName, setProductName] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [location, setLocation] = useState(null)
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null)

    const { user } = useContext(UserContext)
    console.log('sellerUser', user)

    const handleSubmit = () => {

       const message = checkValidData(productName,category,price,location)
        toast(message)
        
       if(message==null){
        if (image === null) {
            toast.error('Please select an image before submit');
            return; // Stop further execution
        }

        //image upload in storage
        const imageRef = storageRef(storage, `image/${image.name}`);

        uploadBytes(imageRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        console.log('urlimg', url)

                        // Define an async function to use await
                        const uploadData = async () => {
                            const usersCollectionRef = collection(db, "Products");
                            const date = new Date()
                            try {
                                await addDoc(usersCollectionRef, {
                                    name: productName,
                                    category: category,
                                    price: price,
                                    location: location,
                                    imageUrl: url,
                                    userId: user.uid,
                                    createdAt: date.toDateString()
                                });


                            } catch (error) {
                                toast.error(error.message);
                            }
                        };


                        uploadData();


                        setProductName(null)
                        setCategory(null)
                        setLocation(null)
                        fileInputRef.current.value = ''
                        setImage(null)
                        setPrice(null)
                        toast.success('success')


                    })

                
                



                    .catch((error) => {
                        toast.error(error.message);
                    });
            })
        
            .catch((error) => {
                toast.error(error.message);
            });

        }
    };
    return (
        <div className='bg-gray-100 grid grid-cols-12 pb-5'>

            <span className='col-span-4'></span>
            <div className='col-span-4 m-10 bg-white rounded-xl'>

                <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-7 w-7 h-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg></Link>
                <div className='mx-auto text-center'>
                    <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

                    <h1 className='font-bold text-xl mt-6'>Sell your Product</h1>

                    <input onChange={(e) => setProductName(e.target.value)} value={productName} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Product Name' />
                    <input onChange={(e) => setCategory(e.target.value)} value={category} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Category' />
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Price' />
                    <input onChange={(e) => setLocation(e.target.value)} value={location} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Location' />

                    {image !== null ? <img className='py-2 px-2 border-2 w-3/4 rounded-lg mx-auto' src={image !== null ? URL.createObjectURL(image) : null} alt="Product image" /> : null}
                    <div>
                        <label className='text-start ms-16 rounded-lg mt-5 block' htmlFor="">Choose a Picture</label>
                        <input onChange={(e) => setImage(e.target.files[0])} ref={fileInputRef} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-1 border-black' type="file" placeholder='Choose' />
                    </div>


                    <button onClick={handleSubmit} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10 mb-16'>Create</button>


                </div>


            </div>
            <span className='col-span-4'></span>


        </div>
    )
}

export default SellProduct