import React,{useId} from 'react'
import { forwardRef } from 'react'

const Input=forwardRef(function Input({
    label,
    type='text',
    classname='',
    ...props
},ref){
    const id=useId();// useId hook to generate unique id for input and label association
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>
            {label}
        </label>}{/*conditionally render label if it's passed as prop in simple terms if label prop is present then only render the label element otherwise don't render it and only render the input element*/}
        <input
         id={id}
         type={type}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${classname}`}
            ref={ref}
            {...props}
        />
    </div>
  )//in the above example we are creating a reusable Input component which can be used to create different types of input fields like text, email, password etc. and we are using forwardRef to forward the ref to the input element so that parent components can access the input element's DOM node if needed and we are also using ...props to pass any other props to the input element like placeholder, value, onChange etc.
}
)// we created Input.jsx file inside components folder to create a reusable input component which can be used to create different types of input fields like text, email, password etc.
export default Input