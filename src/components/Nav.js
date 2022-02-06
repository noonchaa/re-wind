import React from "react";

const Nav = ({open, children, toggle}) => {
    return(
        <nav className={open?"items-center md:flex":'hidden md:flex'}>
            <div className="flex flex-col md:flex-row md:mx-6">
                {children}
            </div>

            <div className="flex justify-end md:block">
                {toggle}
            </div>
        </nav>
    )
}
export default Nav