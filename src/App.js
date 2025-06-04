import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import {BrowserRouter, Router} from "react-router-dom"
import { darkTheme } from './Utils/Themes'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Section/HeroSection'
import Skills from './Components/Section/Skills'
import Experience from './Components/Section/Experience'
import Education from './Components/Section/Education'
import StyledStarCanvas from './Components/canvas/Stars'
import Projects from './Components/Section/Projects'
import Contact from './Components/Section/Contact'
import Footer from './Components/Section/Footer'
import Achievements from './Components/Section/Achievements'



const Body = styled.div`
background-color: ${({theme}) =>theme.bg};
/* background-color: red; */
width: 100%;
overflow-x: hidden;
height: 100%;
color: ${({theme}) => theme.text_primary};

/* border: 1px solid red;             /////////////////extra */
`

const Wrapper =styled.div`
padding-bottom: 100px;
background: linear-gradient(38.73deg,
rgba(204 , 0 , 187 , 0.15) 0%,
rgba(201 , 32 ,184 ,0) 50%),
linear-gradient( 
   141.27deg ,
    rgba(0,70,209,0) 50%,
    rgba(0,70,209,0.15) 100%

);
width: 100%;
clip-path: polygon(0 0,100% 0 , 100% 100% , 30%  98% , 0  100%);

;
`

const FooterSection = styled.div`

padding-top: 150px;
`

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
       <Navbar/>

       <Body>

        <StyledStarCanvas/>
        
        <HeroSection/>

        <Wrapper>
        <Skills/>
        <Experience/>
        </Wrapper>


          {/* <Projects/> */}


         <Wrapper>

          <Education/>
         </Wrapper>



           <Wrapper>
          <Achievements/>
         </Wrapper>
         <Wrapper>
          <Contact/>
         </Wrapper>



         <Footer/>
         
       </Body>
      </BrowserRouter>
    </ThemeProvider>

  )
}



export default App
