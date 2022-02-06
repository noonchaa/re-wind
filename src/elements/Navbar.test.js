import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from './Navbar'

afterEach(cleanup)

test('should render header element',()=>{
    render(<Navbar><h1>text</h1></Navbar>)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('text')
})