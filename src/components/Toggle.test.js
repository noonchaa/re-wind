import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Toggle from './Toggle'

afterEach(cleanup)

test('should render toggle button',()=>{
    render(<Toggle/>)
    expect(screen.getByTestId('toggle')).toBeInTheDocument()
    expect(screen.getByTestId('sun')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('toggle'))
    expect(screen.getByTestId('moon')).toBeInTheDocument()
})