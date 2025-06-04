import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Bio } from '../../Data/constants';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';
import EarthCanvas from '../canvas/Rh';

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  z-index: 10;
  background: linear-gradient(135deg, ${({ theme }) => theme.bg} 0%, ${({ theme }) => theme.bgAlt} 100%);
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */
  /* box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2); */
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary} 0%, 
      ${({ theme }) => theme.secondary} 50%, 
      ${({ theme }) => theme.primary} 100%);
    animation: ${gradientBackground} 8s ease infinite;
    background-size: 200% 200%;
  }
`;

const FootWrapper = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const Nav = styled.nav`
  width: 100%;
  /* max-width: 800px; */
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    color: white;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &:nth-child(1) { background: #3b5998; } /* Facebook */
    &:nth-child(2) { background: #0077b5; } /* LinkedIn */
    &:nth-child(3) { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); } /* Instagram */
    &:nth-child(4) { background: #333; } /* GitHub */
  }
`;

const BackToTop = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: ${pulseAnimation} 3s ease infinite;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 1.5rem;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  opacity: 0.8;
  
  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    margin: 0 auto 1rem;
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FootWrapper>
        <Logo>
          <EarthCanvas />
        </Logo>
        
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Achievements">Achievements</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </Nav>
        
        <SocialMedia>
          <SocialMediaIcon href={Bio.facebook} target="_blank" aria-label="Facebook">
            <FaFacebook size={20} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.instagram} target="_blank" aria-label="Instagram">
            <FaInstagram size={20} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" aria-label="GitHub">
            <FaGithub size={20} />
          </SocialMediaIcon>
        </SocialMedia>
        
        <Copyright>
          © {new Date().getFullYear()} All Rights Reserved
        </Copyright>
        
        <BackToTop onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp size={20} />
        </BackToTop>
      </FootWrapper>
    </FooterContainer>
  );
}

export default Footer;