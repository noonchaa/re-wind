import React from "react";

const Layout = ({children}) => {
    return(
        <div className="bg-white dark:bg-black min-h-screen">
            {children}
        </div>
    )
}
export default Layout