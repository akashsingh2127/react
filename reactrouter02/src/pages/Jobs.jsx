import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {
  const jobsData = useLoaderData()

  return (
    <div className='space-y-3'>
      {jobsData.map((job) => (
        <Link
          key={job.id}
          to={job.id.toString()}
          className='block border p-3 rounded hover:bg-gray-100 transition'
        >
          <h4 className='text-lg font-medium text-blue-600'>{job.title}</h4>
          <p className='text-gray-600'>{job.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Jobs

export const JobsLoader = async () => {
  const res = await fetch('http://localhost:3000/Jobs')
  const data = await res.json()
  return data  // Assuming your JSON is an array of jobs
}
