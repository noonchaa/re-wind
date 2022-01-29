import React from "react";

const Layout = ({children}) => {
    return(
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {children}
        </div>
    )
}
export default Layout