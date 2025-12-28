import React from 'react'
import { Outlet } from 'react-router-dom'

function JobsLayout() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Available Jobs</h1>
      <Outlet />
    </div>
  )
}

export default JobsLayout
