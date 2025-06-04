import React, { useState } from 'react'
import { Link as LinkNav } from "react-router-dom"
import styled, { useTheme } from "styled-components"
import { Bio } from "../Data/constants"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = styled.div`

 background-color: ${({ theme }) => theme.bg};
 height:80px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.3rem;
 position: sticky;
 top: 0;
 z-index: 10;
 width: 100%;
 color: white;
 box-shadow: 0px 4px 6px rgb(147, 45, 220); 
 
`

const NavbarContainer = styled.div`
 /* border: 10px solid red; */
 width:100%;
 /* max-width: 1200px; */
 background-color: ${({ theme }) => theme.bg};
 height:80px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 24px;
 font-size: 1.3rem;
 border-bottom: 3px solid  ${({ theme }) => theme.primary} ;


`
const NavLogo = styled.div`
width: 80%;
padding: 0 10px;
/* background-color: red; */
text-decoration: none;
color: inherit;
font-weight: 600;
font-size: 26px;
`
const NavItems = styled.ul`
/* background-color:red; */
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 32px;
padding:0 6px;
list-style: none;
/* flex-wrap: wrap; */
@media screen and (max-width:768px)
{
    display:none;
}
`

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 900;
text-decoration: none;
&:hover{
    color: ${({ theme }) => theme.primary};
    transition: ease-in-out 0.3s;
}
/* @media screen and (max-width:768px)
{
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom:2px solid black;
    
} */
`

const ButtonContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: end;
align-items: center;
padding: 0 6px;
@media screen and (max-width:768px)
{
    display:none;
}
`

const GitButton = styled.a`
/* border: 1px solid ${({ theme }) => theme.primary}; */
border-radius: 30px;
padding: 5px 10px;
cursor: pointer;
text-decoration: none;
font-size: 16px;
margin-right: 5px;
font-weight: 500;
color: ${({ theme }) => theme.primary};
&:hover{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transition: ease-in-out 0.3s;
}
`

const MobileIcon = styled.div`
display: none;
height: 100%;
align-items: center;
border: 1px solid   ${({ theme }) => theme.primary};;
height: 60%;
border-radius: 20%;
width: 7%;
justify-content: center;
&:hover{
    background-color: ${({ theme }) => theme.primary};
    transition: ease-in-out 0.3s;
}
@media screen and (max-width : 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
}
`

const MenuRounded = styled.div`
/* background-color: ${({ theme }) => theme.primary}; */
color: ${({ theme }) => theme.text_primary};
/* background-color: red; */
font-size: 30px;
color: inherit;

`

const MobileMenu = styled.ul`
    /* background-color:red; */
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;
/* justify-content: center; */
gap: 16px;

/* padding:0 6px; */


padding: 12px 40px 24px 40px;
background-color: ${({ theme }) => theme.card_light + 99};
position: absolute;
top: 80px;
right: 0;

transition: all 0.6s ease-in-out;
transform: ${({ isopen }) =>
        isopen ? "translateY(0)" : "translateY(-100%)"
    };
border-radius: 0 0 20px 20px;
box-shadow: 0 0 10px 0 violet;
opacity: ${({ isopen }) => (isopen ? "100%" : "0")};
z-index: ${({ isopen }) => (isopen ? "1000" : "-1000")};
/* flex-wrap: wrap; */

`



function Navbar() {
    const [isopen, setisopen] = useState(false)
    const theme = useTheme()
    return (

        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>

                    <a href="" style={{ "color": 'white', "textDecoration": 'none' }}><img src='logoviper.png' width='80px' style={{"paddingTop":'10px'}}/> </a>
                </NavLogo>



                <MobileIcon isopen={isopen}>
                    <MenuRounded onClick={function () {
                        setisopen(!isopen)
                        console.log("clicked menu icon")
                    }
                    }>
                        <MenuRoundedIcon></MenuRoundedIcon>
                    </MenuRounded>
                </MobileIcon>

                <NavItems>
                    <NavLink href="#About">About</NavLink>
                    {/* <NavLink href="#Education">Education</NavLink> */}
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Achievements">Achivements</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    {/* <NavLink href="#Conatct">Contact</NavLink> */}

                </NavItems>

                <MobileMenu isopen={isopen}>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#About">About</NavLink>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#Education">Education</NavLink>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#Skills">Skills</NavLink>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#Achievements">Achivements</NavLink>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#Projects">Projects</NavLink>
                    <NavLink onClick={function()
                        {
                            setisopen(!isopen)
                        }
                    } href="#Conatct">Contact</NavLink>
                    <GitButton href={Bio.github}  target='_blank' style={{background:theme.primary,color:theme.text_primary}} >
                       <img src="github.png" alt="" 
                        width={40} height={40}/>
                    </GitButton>
                    <GitButton  href="https://nidharsanmodel.netlify.app/"
  target="_blank" style={{background:theme.primary,color:theme.text_primary}} >
                       <img src="model.png" alt="" 
                        width={40} height={40}/>
                    </GitButton>
                </MobileMenu>

                <ButtonContainer>
                    <GitButton href={Bio.github} target='_blank'>
                      <img src="github.png" alt="" 
                        width={40} height={40}/>
                    </GitButton>
                    <GitButton href="https://nidharsanmodel.netlify.app/"
  target="_blank">
                      <img src="model.png" alt="" 
                        width={40} height={40}/>
                    </GitButton>
                </ButtonContainer>

            </NavbarContainer>
        </Nav>

    )
}

export default Navbar
