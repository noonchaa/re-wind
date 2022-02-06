import React from "react";
import NavBrand from "../components/NavBrand";
import Nav from '../components/Nav'
import Toggle from '../components/Toggle'

const Navbar = ({children,brand,logo,open,setOpen,sticky}) => {
    return(
        <header data-testid='navbar' className={`bg-white shadow dark:bg-gray-800 z-50 ${sticky?'sticky':'relative'} top-0`}>
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <NavBrand logo={logo} setOpen={setOpen} >{brand}</NavBrand>
                <Nav toggle={<Toggle/>} open={open} >
                    {children}
                </Nav>
            </div>
        </header>
    )
}
export default Navbar