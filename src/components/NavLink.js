import React from "react";

const NavLink = ({children,red,blue,green,yellow}) => {
    const hover = red ? 'hover:text-red-500 dark:hover:text-red-400':blue?'hover:text-blue-500 dark:hover:text-blue-400':green?'hover:text-green-500 dark:hover:text-green-400':yellow?'hover:text-yellow-500 dark:hover:text-yellow-400':'hover:text-gray-500 dark:hover:text-gray-400'
    return(
        <div className={`my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 ${hover} md:mx-4 md:my-0 capitalize`}>
            {children}
        </div>
    )
}
export default NavLink