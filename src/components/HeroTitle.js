import React from "react";

const HeroTitle = ({children}) => {
    return(
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            {children}
        </h1>
    )
}
export default HeroTitle