import React, { useState, useEffect } from 'react'
import { Link as LinkNav } from "react-router-dom"
import styled, { useTheme } from "styled-components"
import { Bio } from "../Data/constants"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 10000;
  width: 100%;
  color: white;
  box-shadow: 0px 4px 6px rgb(147, 45, 220);
  transition: top 0.3s;
`

const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 1.3rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
`

const NavLogo = styled.div`
  width: 80%;
  padding: 0 10px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 26px;
`

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 900;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: ease-in-out 0.3s;
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const GitButton = styled.a`
  border-radius: 30px;
  position: relative;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  margin-right: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transition: ease-in-out 0.3s;
  }
  &
  :hover::after {
    content: attr(data-label);  
    position: absolute;
   
  }
`

const MobileIcon = styled.div`
  display: none;
  height: 100%;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.primary};
  height: 60%;
  border-radius: 20%;
  width: 7%;
  justify-content: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transition: ease-in-out 0.3s;
  }
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MenuRounded = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 30px;
  color: inherit;
`

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isopen }) => isopen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 violet;
  opacity: ${({ isopen }) => (isopen ? "100%" : "0")};
  z-index: ${({ isopen }) => (isopen ? "1000" : "-1000")};
`

function Navbar() {
    const [isopen, setisopen] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const theme = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            
            setVisible(
                (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || 
                currentScrollPos < 10
            )
            
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible])

    return (
        <Nav style={{ top: visible ? '0' : '-80px' }}>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a href="" style={{ color: 'white', textDecoration: 'none' }}>
                        <img src='logoviper.png' width='80px' style={{ paddingTop: '10px' }} alt="Logo" />
                    </a>
                </NavLogo>

                <MobileIcon isopen={isopen}>
                    <MenuRounded onClick={() => setisopen(!isopen)}>
                        <MenuRoundedIcon />
                    </MenuRounded>
                </MobileIcon>

                <NavItems>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Achievements">Achievements</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                </NavItems>

                <MobileMenu isopen={isopen}>
                    <NavLink onClick={() => setisopen(!isopen)} href="#About">About</NavLink>
                    <NavLink onClick={() => setisopen(!isopen)} href="#Skills">Skills</NavLink>
                    <NavLink onClick={() => setisopen(!isopen)} href="#Achievements">Achievements</NavLink>
                    <NavLink onClick={() => setisopen(!isopen)} href="#Projects">Projects</NavLink>
                  <GitButton 
  href={Bio.github}  
  target='_blank' 
  data-label="GitHub"
>
  <img src="github.png" alt="GitHub" width={40} height={40} />
</GitButton>

<GitButton 
  href="https://nidharsanmodel.netlify.app/"  
  target='_blank' 
  data-label="My Models"
>
  <img src="model.png" alt="Model" width={40} height={40} />
</GitButton>

                </MobileMenu>

                <ButtonContainer>
                    <GitButton href={Bio.github} target='_blank'>
                        <img src="github.png" alt="GitHub" width={40} height={40} />
                    </GitButton>
                    <GitButton href="https://nidharsanmodel.netlify.app/" target="_blank">
                        <img src="model.png" alt="Model" width={40} height={40} />
                    </GitButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar