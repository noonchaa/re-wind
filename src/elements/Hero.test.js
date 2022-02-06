import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import Hero from './Hero'

afterEach(cleanup)

test('should render hero element',()=>{
    render(<Hero><h1>Hero</h1></Hero>)
    expect(screen.getByTestId('hero')).toContainElement(screen.getByRole('heading'))
    expect(screen.getByTestId('hero')).toHaveTextContent('Hero')
})