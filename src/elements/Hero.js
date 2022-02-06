import React from "react";

const Hero = ({children,background}) => {
    return(
        <section data-testid='hero' className='mx-auto relative bg-gray-50 dark:bg-gray-900'>
            {background?
            <div className="w-full h-full absolute bg-opacity-80 z-0 bg-cover bg-no-repeat bg-center backdrop-filter backdrop-brightness-75" style={background?{backgroundImage:`url(${background})`}:{}} />
            :''}
            <div className="px-6 py-16 relative container mx-auto z-10">
                {children}
            </div>
        </section>
    )
}
export default Hero