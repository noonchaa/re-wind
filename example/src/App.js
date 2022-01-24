import React from 'react'
import 're-wind/dist/index.css'
import { Button, Navbar, NavLink } from 're-wind'

const App = () => {
  return (
    <div>
      <Navbar brand='Re-Wind'>
        <NavLink to='#test' text='test'/>
      </Navbar>
      <Button>This is a button</Button>
    </div>
  )
}

export default App
