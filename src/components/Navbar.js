import React, { useState } from "react";

const Navbar = ({brand,children}) => {
    const [open, setOpen] = useState(false)
    return(
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">{brand}</a>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={()=>setOpen(!open)}>
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={open?'block':'hidden lg:block'}>
                        <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar