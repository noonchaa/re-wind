import React from "react";

const NavLink = ({to,text}) => {
    return <a href={to} className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">{text}</a>
}
export default NavLink