import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import NavBrand from './NavBrand'

afterEach(cleanup)

test('should render navigation brand',()=>{
    render(<NavBrand>rewind</NavBrand>)
    expect(screen.getByTestId('navbrand')).toBeInTheDocument()
    expect(screen.getByTestId('navbrand')).toHaveTextContent('rewind')
    expect(screen.getByTestId('brandLogo')).toBeEmptyDOMElement()
})
test('should render logo',()=>{
    const logo = 'logo'
    render(<NavBrand logo={logo}>rewind</NavBrand>)
    expect(screen.getByTestId('brandLogo')).not.toBeEmptyDOMElement()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src','logo')
})