import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
  return (
    <div>
    <Navbar/>
    <div className='flex-grow flex items-center justify-center py-75'> <Outlet/></div>
    
    </div>
  )
}

export default RootLayout