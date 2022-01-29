import React from 'react'

const Button = ({children, small, medium, big}) => {
  const size = small ? 'px-4 py-2 font-medium tracking-wide' : 'px-0 py-0'
  return(
    <button className={`${size} text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`}>
        {children}
    </button>
  )
}
export default Button
