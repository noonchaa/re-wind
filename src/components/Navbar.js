import React from "react";

const Navbar = ({children}) => {
    return(
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                {children}
            </div>
        </nav>
    )
}
export default Navbar

