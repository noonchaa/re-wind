import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Nav from './Nav'
import Toggle from './Toggle'

afterEach(cleanup)

test('should render navigation block',()=>{
    render(<Nav/>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
})
test('should have class based on true state',()=>{
    render(<Nav open/>)
    expect(screen.getByRole('navigation')).toHaveClass('items-center md:flex')
})
test('should have class based on false state',()=>{
    render(<Nav open={false}/>)
    expect(screen.getByRole('navigation')).toHaveClass('hidden md:flex')
})
test('should render toggle element',()=>{
    render(<Nav toggle={<Toggle/>} />)
    expect(screen.getByRole('navigation')).toContainElement(screen.getByTestId('toggle'))
})
test('should render child element',()=>{
    render(<Nav><h1>link</h1></Nav>)
    expect(screen.getByRole('navigation')).toContainElement(screen.getByRole('heading'))
    expect(screen.getByRole('navigation')).toHaveTextContent('link')
})
