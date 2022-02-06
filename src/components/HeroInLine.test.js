import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HeroInLine from "./HeroInLine";

afterEach(cleanup)

test('should render inline hero',()=>{
    render(<HeroInLine><h1>hero</h1></HeroInLine>)
    expect(screen.getByTestId('hero-in-line')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByTestId('hero-in-line')).toHaveTextContent('hero')
})