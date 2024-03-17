import React, { createContext, useContext, useEffect, useState } from 'react'
import Crud from './components/Crud'
import { Outlet ,RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Body from './components/Body'
import SellProduct from './components/SellProduct'
import Home from './components/Home'
import { FirebaseContext } from './store/Context'
import app, { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/ProductDetail'
import { PostContext } from './store/PostContext'

export const UserContext=createContext(null)

const addRouter = createBrowserRouter([
 
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    
      {
        path:'/sellProduct',
        element:<SellProduct/>
      },
      {
        path:'/productDetail',
        element:<ProductDetail/>
      }

    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },  

])


const App = () => {
  const [user,setUser]=useState(null)
  const [postDetails,setPostDetails]=useState(null)
  console.log('iam main app')

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid; 
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    },[]);

  })
  return (
    <FirebaseContext.Provider value={{app}}>
      <UserContext.Provider value={{user,setUser}}>
        <PostContext.Provider value={{postDetails,setPostDetails}}>
    <RouterProvider router={addRouter}>
     <Body/>
    </RouterProvider>
        </PostContext.Provider>
      </UserContext.Provider>
    </FirebaseContext.Provider>
  )
}

export default App