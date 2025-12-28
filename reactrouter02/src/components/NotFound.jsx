import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigator=useNavigate();
  return (
    <div>NotFound | 404
        <br/>
        <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded' onClick={()=>{navigator('/')}}>Go to Home Page</button>
    </div>
  )
}

export default NotFound