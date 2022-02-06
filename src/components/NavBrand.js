import React from "react";

const NavBrand = ({children,setOpen,logo}) => {
    return(
        <div data-testid="navbrand" className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                <span data-testid='brandLogo'>{logo?<img src={logo} alt='logo' className="h-6 lg:h-8 inline-block" />:''}</span>
                {children}
            </div>
            <div className="flex md:hidden">
                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={setOpen}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default NavBrand