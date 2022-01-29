import React from "react";
import { Toggle } from "..";

const Nav = ({open, children}) => {
    return(
        <div className={open?"items-center md:flex":'hidden md:flex'}>
            <div className="flex flex-col md:flex-row md:mx-6">
                {children}
            </div>

            <div className="flex justify-end md:block">
                <Toggle/>
            </div>
        </div>
    )
}
export default Nav