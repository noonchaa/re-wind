import React, { useState } from 'react'
import 're-wind/dist/index.css'
// import { Hero, HeroImage, HeroLead, HeroLeft, HeroSide, HeroStack, HeroTitle, Layout, Nav, Navbar, NavBrand, NavLink } from 're-wind'
import {Main, Container, Navbar, NavLink, Hero, Toggle, HeroInLine, HeroLeft} from 're-wind'
import logo from './RedX.svg'
import bg from './smoke.jpg'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <Main>
      <Navbar brand='Re-wind' logo={logo} open={open} setOpen={()=>setOpen(!open)} sticky>
        <NavLink red>
          <a href='/'>components</a>
        </NavLink>
        <NavLink red>
          <a href='#example'>examples</a>
        </NavLink>
        <NavLink red>
          <a href='https://github.com/noonchaa/re-wind'>github</a>
        </NavLink>
      </Navbar>
      <Hero background={bg}>
        <Container>
          <HeroInLine>
            <HeroLeft>
              <h1>Hero left</h1>
            </HeroLeft>
            <h1>Hero right</h1>
          </HeroInLine>
        </Container>
      </Hero>
      <Navbar brand='Re-wind' logo={logo} open={open} setOpen={()=>setOpen(!open)}>
        <NavLink red>
          <a href='/'>components</a>
        </NavLink>
        <NavLink red>
          <a href='#example'>examples</a>
        </NavLink>
        <NavLink red>
          <a href='https://github.com/noonchaa/re-wind'>github</a>
        </NavLink>
      </Navbar>
      <Container>
        <Hero>
        <h1>Contained Hero</h1>
        </Hero>
      <Toggle/>
      </Container>
      <div style={{height:'100vh'}}/>
    </Main>
    // <Layout>
    //   <Navbar brand='Re-Wind'>
    //     <NavBrand open={()=>setOpen(!open)}>
    //       <a href='/'>
    //         <span><img src='RedX.svg' alt='X' style={{width:24, height:'auto',display:'inline-block'}}/></span>
    //         Rewind
    //       </a>
    //     </NavBrand>
    //     <Nav open={open}>
    //       <NavLink red>
    //         <a href='/'>components</a>
    //       </NavLink>
    //       <NavLink red>
    //         <a href='#example'>examples</a>
    //       </NavLink>
    //       <NavLink red>
    //         <a href='https://github.com/noonchaa/re-wind'>github</a>
    //       </NavLink>
    //     </Nav>
    //   </Navbar>
    //   <Hero>
    //     <HeroSide>
    //       <HeroLeft>
    //         <HeroTitle>Building Your Next App with our Awesome components</HeroTitle>
    //         <HeroLead>be the first to knows when <span style={{color:'red'}}>Re-Wind</span> is updated</HeroLead>
    //         <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
    //             <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-600" placeholder="Email Address"/>
    //             <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-red-500 focus:outline-none focus:bg-red-500">
    //                 Subscribe
    //             </button>
    //         </div>
    //       </HeroLeft>
    //       <HeroImage right>
    //         <img src='RedX.svg' alt='x' style={{width:250, height:'auto'}}/>
    //       </HeroImage>
    //     </HeroSide>
    //   </Hero>
    //   <Hero>
    //     <HeroStack>
    //       <HeroTitle>Building Your Next App with our Awesome components</HeroTitle>
    //       <HeroLead>be the first to knows when <span style={{color:'red'}}>Re-Wind</span> is updated</HeroLead>
    //         <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row justify-center">
    //             <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-600" placeholder="Email Address"/>
    //             <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-red-500 focus:outline-none focus:bg-red-500">
    //                 Subscribe
    //             </button>
    //         </div>
    //       <HeroImage>
    //         <img src='RedX.svg' alt='x' style={{width:250, height:'auto'}}/>
    //       </HeroImage>
    //     </HeroStack>
    //   </Hero>
    // </Layout>
  )
}

export default App
