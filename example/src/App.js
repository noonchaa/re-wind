import React from 'react'
import 're-wind/dist/index.css'
import { Button, Container, Layout, Navbar, NavLink, Toggle } from 're-wind'

const App = () => {
  return (
    <Layout>
      <Navbar brand='Re-Wind'>
        <NavLink>
          <a href='/'>home</a>
        </NavLink>
        <NavLink red>
          <a href='/'>home</a>
        </NavLink>
        <NavLink blue>
          <a href='/'>home</a>
        </NavLink>
        <NavLink green>
          <a href='/'>home</a>
        </NavLink>
        <NavLink yellow>
          <a href='/'>home</a>
        </NavLink>
      </Navbar>
      <Container>
        <Button>This is a button</Button>
        <Toggle/>
      </Container>
    </Layout>
  )
}

export default App
