import React from 'react'

//containers component will be used to wrap other components to provide consistent styling and layout across the application
function Containers({children}) {//here children prop is used to wrap other components inside this Containers component
  return (
    <div className='w-full max-w-7xl mx-auto'>{children}</div>
  )
}

export default Containers