import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function JobDetails() {
  const job = useLoaderData()
  const { id } = useParams()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600">📍 Location: {job.location}</p>
      <p className="text-gray-600">💰 Salary: ${job.salary}</p>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/Jobs/${params.id}`)
  if (!res.ok) {
    throw new Error('Failed to load job details')
  }
  return res.json()
}
