import React from 'react'
import Dark from './Dark'
import {FaMoon, FaSun} from 'react-icons/fa'

const Toggle = () => {
    const [colorTheme, setTheme] = Dark()
    return(
        <div className="rounded-full h-5 w-8 cursor-pointer z-50" onClick={()=>setTheme(colorTheme)}>
            {colorTheme === 'dark' ?
            <div className='rounded-full bg-gray-800 flex justify-start'>
                <div className=' rounded-full bg-gray-50 h-5 w-5 border border-gray-800 p-1'>
                    <FaSun className='text-gray-800 h-full w-full'/>
                </div>
            </div>:
            <div className='rounded-full bg-gray-50 flex justify-end'>
                <div className=' rounded-full bg-gray-800 h-5 w-5 border border-gray-50 p-1'>
                    <FaMoon className='text-gray-50 h-full w-full'/>
                </div>
            </div>
            }
            {/* <div className='rounded-full bg-gray-800 h-5 w-8 flex justify-end'>
                <div className='h-5 w-5 bg-gray-50 p-1 rounded-full ring-1 ring-gray-800'>
                    <FaSun className='h-3 w-3'/>
                </div>
            </div> */}
                    {/* {colorTheme === 'light' ? <FaSun className='h-3 w-3 text-gray-800 my-auto justify-self-start'/> 
                    : <FaMoon className='h-3 w-3 text-gray-50 my-auto'/>} */}
        </div>
    )
}
export default Toggle