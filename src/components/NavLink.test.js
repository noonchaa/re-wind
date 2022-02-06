import React from "react";
import { cleanup, render, screen } from '@testing-library/react'
import NavLink from './NavLink'

afterEach(cleanup)

test('render navigation link default hover',()=>{
    render(<NavLink>link</NavLink>)
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveClass('hover:text-gray-500 dark:hover:text-gray-400')
})
test('render navigation link red hover',()=>{
    render(<NavLink red>link</NavLink>)
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveClass('hover:text-red-500 dark:hover:text-red-400')
})
test('render navigation link blue hover',()=>{
    render(<NavLink blue>link</NavLink>)
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveClass('hover:text-blue-500 dark:hover:text-blue-400')
})
test('render navigation link green',()=>{
    render(<NavLink green>link</NavLink>)
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveClass('hover:text-green-500 dark:hover:text-green-400')
})
test('render navigation link yellow hover',()=>{
    render(<NavLink yellow>link</NavLink>)
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveClass('hover:text-yellow-500 dark:hover:text-yellow-400')
})