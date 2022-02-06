import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Container from './Container'

afterEach(cleanup)

test('should render a div',()=>{
    render(<Container/>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(screen.getByTestId('container')).toHaveClass('container mx-auto')
})
test('should render child element',()=>{
    render(<Container><h1>Text</h1></Container>)
    expect(screen.getByTestId('container')).toContainElement(screen.getByRole('heading'))
    expect(screen.getByTestId('container')).toHaveTextContent('Text')
})