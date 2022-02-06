import React from "react";

const HeroInLine = ({children}) => {
    return(
        <div data-testid='hero-in-line' className="items-center lg:flex">
            {children}
        </div>
    )
}
export default HeroInLine