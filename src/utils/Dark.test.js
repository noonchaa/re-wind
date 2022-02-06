import React from "react";
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Dark from "./Dark";

afterEach(cleanup)

test('color theme',()=>{
    const Test = () =>{
        const [colorTheme, setTheme] = Dark()
        return<button className={colorTheme} onClick={()=>setTheme(colorTheme)}>Click</button>
    }
    render(<Test/>)
    expect(screen.getByRole('button')).toHaveClass('dark')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveClass('light')
})