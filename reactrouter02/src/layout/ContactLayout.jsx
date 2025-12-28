import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'
{/*<Outlet> is a placeholder component that tells React Router where to render child routes. */}

function ContactLayout() {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}

export default ContactLayout