import React from "react";

const HeroImage = ({children, right}) => {
    return(
        <div className={`flex items-center justify-center w-full mt-6 ${right?'lg:mt-0 lg:w-1/2':''}`}>
            {children}
        </div>
    )
}
export default HeroImage