import React from 'react'
import Crud from './Crud'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Body