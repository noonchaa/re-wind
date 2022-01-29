import React from "react";

const HeroLeft = ({children}) => {
    return(
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
            {children}
            </div>
        </div>
    )
}
export default HeroLeft