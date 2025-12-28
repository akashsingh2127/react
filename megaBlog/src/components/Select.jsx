import React from 'react'
import { useId } from 'react'

function Select({
    options,//by default we get an array for options to be shown in select dropdown
    label,
    classname='',
    ...props
},ref) {
    const id=useId();
  return (
    <div className='w-full'>
        {label&&<label htmlFor={id} className=''></label>}
        <select
         id={id}
         className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${classname}`}  
            ref={ref}
            {...props}>
                {options?.map((option)=>(//here we are doing conditional chaining to avoid error in case options value is undefined
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
    </div>
  )
}

export default React.forwardRef(Select)