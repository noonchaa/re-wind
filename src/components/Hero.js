import React from "react";

const Hero = ({children}) => {
    return(
        <div className='container px-6 py-16 mx-auto'>
            {children}
        </div>
    )
}
export default Hero