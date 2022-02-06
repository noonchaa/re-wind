import React from 'react'
import {render,screen,cleanup} from '@testing-library/react'
import Button from './Button'

afterEach(cleanup)

test('should render a button',()=>{
    render(<Button small >Button</Button>)
    expect(screen.getByRole('button'))
    expect(screen.getByText('Button'))
})

test('show HTML structure',()=>{
    render(<Button small/>)
    expect(screen.debug())
})