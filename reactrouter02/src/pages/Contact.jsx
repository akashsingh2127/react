import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigator=useNavigate();
  return (
    <div>     
    <div className='text-center text-red-600'>Contact</div>
    <div className='space-x-4 mb-6'>
        <button
          onClick={() => navigator('info')}
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
        >
          Contact Info
        </button>
        <button
          onClick={() => navigator('form')}
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
        >
          Contact Form
        </button>
      </div>
    </div>
  )
}

export default Contact