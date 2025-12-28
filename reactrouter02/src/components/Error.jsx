import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  const navigator = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-3xl font-bold text-red-600">Error!</h1>
      <p className="text-gray-700">{error.message}</p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => navigator('/')}
      >
        Go to Home Page
      </button>
    </div>
  )
}

export default Error
