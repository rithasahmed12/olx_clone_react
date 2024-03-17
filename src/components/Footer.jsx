import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";


function Footer() {
    return (
        <>
            <div className='wrapper bg-gray-100 ' >
                <div className="container mx-auto h-36  flex gap-5">
                    <div className="footerbox w-full h-full  text-[#002f34]">
                        <div className='text-sm font-semibold leading-7 mt-3'>POPULAR LOCATIONS</div>
                        <div className='text-xs leading-6'>Kolkata</div>
                        <div className='text-xs leading-6'>Mumbai</div>
                        <div className='text-xs leading-6'>Chennai</div>
                        <div className='text-xs leading-6'>Pune</div>
                    </div>
                    <div className="footerbox w-full h-full  text-[#002f34]">
                        <div className='text-sm font-semibold leading-7 mt-3'>TRENDING LOCATIONS</div>
                        <div className='text-xs leading-6'>Bhubaneshwar</div>
                        <div className='text-xs leading-6'>Hyderabad</div>
                        <div className='text-xs leading-6'>Chandigarh</div>
                        <div className='text-xs leading-6'>Nashik</div>
                    </div>
                    <div className="footerbox w-full h-full  text-[#002f34]">
                        <div className='text-sm font-semibold leading-7 mt-3'>ABOUT</div>
                        <div className='text-xs leading-6'>Contact Us</div>
                    </div>
                    <div className="footerbox w-full h-full  text-[#002f34]">
                        <div className='text-sm font-semibold leading-7 mt-3'>OLX</div>
                        <div className='text-xs leading-6'>Help</div>
                        <div className='text-xs leading-6'>Sitemap</div>
                        <div className='text-xs leading-6'>Legal & Privacy information</div>
                        <div className='text-xs leading-6'>Vulnerability Disclosure Program</div>
                    </div>
                    <div className="footerbox w-full h-full ">
                        <div className='text-sm font-semibold leading-7 mt-3'>FOLLOW US</div>
                        <div className="social flex">
                            <FaFacebookF opacity={0.6} className='' size={20} />
                            <FaInstagram opacity={0.6} className='ml-2' size={20} />
                            <FaTwitter opacity={0.6} className='ml-2' size={20} />
                            <IoPlayCircleOutline opacity={0.6} className='ml-2' size={20} />
                        </div>
                        <div className='flex mt-6'>
                            <img className='h-6 mr-3' src="./appstore_2x.webp" alt="" />
                            <img className='h-6' src="./playstore_2x.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#002f34]">
                <div className='container mx-auto h-16  flex justify-between text-white text-xs items-center' >
                    <h1>amjadali©rights</h1>
                    <h1>All rights reserved © 2006-2024 OLX</h1>
                </div>
            </div>
        </>

    )
}

export default Footer