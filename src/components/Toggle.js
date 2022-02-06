import React from 'react'
import Dark from '../utils/Dark'
import {FaMoon, FaSun} from 'react-icons/fa'

const Toggle = () => {
    const [colorTheme, setTheme] = Dark()
    return(
        <section data-testid='toggle' className="rounded-full h-5 w-8 cursor-pointer z-50" onClick={()=>setTheme(colorTheme)}>
            {colorTheme === 'dark' ?
            <div data-testid='sun' className='rounded-full bg-gray-800 flex justify-start'>
                <div className=' rounded-full bg-gray-50 h-5 w-5 border border-gray-800 p-1'>
                    <FaSun className='text-gray-800 h-full w-full'/>
                </div>
            </div>:
            <div data-testid='moon' className='rounded-full bg-gray-50 flex justify-end'>
                <div className=' rounded-full bg-gray-800 h-5 w-5 border border-gray-50 p-1'>
                    <FaMoon className='text-gray-50 h-full w-full'/>
                </div>
            </div>
            }
        </section>
    )
}
export default Toggle