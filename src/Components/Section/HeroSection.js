import React from 'react'
import StyledStarCanvas from '../canvas/Stars.jsx'
import styled from 'styled-components'
import { Bio } from '../../Data/constants'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import HeroBgAnimation from '../../HeroAnimation';
import Typewriter from "typewriter-effect"
const HeroImg = require("../../images/hero.jpg");
const BackImg = require("../../images/final.png");
const skill = require("../../images/skill.png");
const exp = require("../../images/exp.png");
const proj = require("../../images/proj.png");
const edu = require("../../images/edu.png");
const achieve = require("../../images/achieve.png");
const cert= require("../../images/cert.png");
const headContainerAnimation = require("../../Utils/motion.js")
const headTextAnimation = require("../../Utils/motion.js")
const headContentAnimation = require("../../Utils/motion.js")





const FloatingButton = styled.a`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  &.top-left-1 {
    top: 100px;
    left: 20px;
  }
  
  &.top-left-2 {
    top: 180px;
    left: 20px;
  }

   &.top-left-3 {
    top: 260px;
    left: 20px;
  }
  
  &.top-right-1 {
    top: 100px;
    right: 20px;
  }
  
  &.top-right-2 {
    top: 180px;
    right: 20px;
  }

    
  &.top-right-3 {
    top: 260px;
    right: 20px;
  }
  
   box-shadow: 2px 2px 10px 3px rebeccapurple;
   transition: all 0.3s ease;

&:hover::after {
  transition: all 0.3s ease;
  transform: translateY(-10px);
  content: attr(data-tooltip);
  position: absolute;
  bottom: -20px; /* offset so it appears below the element */
  /* left: 0; */
  font-size: 12px;
  background: #000; /* optional: better visibility */
  color: ${({ theme }) => theme.primary};    
  font-weight: bold;  /* optional: contrast text */
  padding: 4px 8px; /* optional: spacing */
  border-radius: 15px; /* optional: styling */
  white-space: nowrap;
  transition: all 1s ease;
  z-index: 1001; /* ensure it appears above other elements */
    box-shadow: 2px 2px 10px 3px rebeccapurple;
}

`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  min-height: 90vh;
  z-index: 1;

  @media (max-width:960px) {
    padding: 60px 16px;
  }
  @media (max-width:640px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 40px;
  max-width:1100px;
  
  @media (max-width:960px) {
    flex-direction: column;
  }
`

const HeroLeft = styled.div`
  width: 100%;
  order: 1;
  
  @media (max-width:960px) {
    order: 2;   
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`

const HeroRight = styled.div`
  width: 100%;
  order:2;
  display: flex;          
  justify-content: end;
  
  @media (max-width:960px) {
    order: 1;   
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width:640px) {
    margin-bottom: 30px;
  }
`

const Title = styled.div`
  font-weight:700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height:48px;
    margin-bottom: 8px;
  }
`

const TextType = styled.div`
  font-weight:600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height:48px;
    margin-bottom: 16px;
  }
`

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`

const Subtitle = styled.div`
  font-size: 20px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height:32px;
    width: 95%;
  }
`

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  color: white;
  width: 95%;
  max-width: 200px;
  text-align: center;
  padding: 16px 0px;
  cursor: pointer;
  background: linear-gradient(145deg, 
    hsla(271, 100%, 45%, 1) 0%, 
    hsla(294, 100%, 45%, 1) 50%,
    hsla(271, 100%, 35%, 1) 100%);
  border: none;
  border-radius: 50px;
  position: relative;
  box-shadow: 
    0 8px 0 0 hsla(271, 100%, 30%, 1),
    0 15px 20px rgba(0, 0, 0, 0.3),
    inset 0 2px 2px rgba(255, 255, 255, 0.2),
    inset 0 -2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  font-size: 20px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  transform: translateY(0);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 10px 0 0 hsla(271, 100%, 30%, 1),
      0 20px 25px rgba(0, 0, 0, 0.4),
      inset 0 2px 2px rgba(255, 255, 255, 0.2),
      inset 0 -2px 5px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 
      0 4px 0 0 hsla(271, 100%, 30%, 1),
      0 5px 10px rgba(0, 0, 0, 0.3),
      inset 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease-out;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  box-shadow: 2px 2px 10px 10px rebeccapurple;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 3px solid ${({ theme }) => theme.primary};

  @media (max-width:640px) {
    width:300px;
    height: 300px;
  }
`

const HeroBg = styled.div`
  position:absolute;
  display: flex;
  top: 50%;
  bottom: 0;
  right: 0;
  left:50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  transform:translateX(-50%) translateY(-50%);
  
  @media (max-width:960px) {
    justify-content: center;
    padding: 0 0px;
  }
`



const FlipCard = styled.div`
  background-color: transparent;
  width: 400px;
  height: 400px;
  perspective: 1000px;
    @media (max-width:640px) {
    width:300px;
    height: 300px;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;

  
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 10px rebeccapurple;
  border: 3px solid ${({ theme }) => theme.primary};
  object-fit: cover;
`;


function HeroSection() {
    return (
        <div id='about' style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Floating Buttons */}
            <FloatingButton className="top-left-1" href="#skills" title="About" data-tooltip="Skills">
                <img src={skill} alt="" height={40} style={{borderRadius:'50%'}}/>
            </FloatingButton>


            <FloatingButton className="top-left-2" href="#project" title="Project" data-tooltip="Project">
                <img src={proj} alt="" height={40} style={{borderRadius:'50%'}}/>
            </FloatingButton>


            <FloatingButton className="top-left-3" href="#achievement" title="Achievement" data-tooltip="Achievement">
                <img src={achieve} alt="" height={40} style={{borderRadius:'50%'}}/>
            </FloatingButton>


            <FloatingButton className="top-right-1" href="#experience" title="Experience" data-tooltip="Experience">
                <img src={exp} alt="" height={40} style={{borderRadius:'10%'}}/>


            </FloatingButton>



            <FloatingButton className="top-right-2" href="#education" title="Education" data-tooltip="Education">
                <img src={edu} alt="" height={40} 
                 width={40} style={{borderRadius:'50%'}}/>
            </FloatingButton>


            
            <FloatingButton className="top-right-3" href="#certifications" title="Certifications" data-tooltip="Certifications">
                <img src={cert} alt="" height={40} width={40} style={{borderRadius:'50%'}}/>
            </FloatingButton>
            
            
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>

                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeft>
                            <motion.div {...headTextAnimation}>
                                <Title>Hi!, I am <br />{Bio.name}. . .</Title>
                                <TextType>
                                    Iam a
                                    <Span>
                                        <Typewriter options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true
                                        }}>
                                        </Typewriter>
                                    </Span>
                                </TextType>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <Subtitle>
                                    {Bio.description}
                                </Subtitle>
                            </motion.div>

                            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                                📝Resume📝
                            </ResumeButton>
                        </HeroLeft>

                       <HeroRight>
  <motion.div {...headContentAnimation}>
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront>
          <ImgStyled src={HeroImg} alt="Front" />
        </FlipCardFront>
        <FlipCardBack>
          <ImgStyled src={BackImg} alt="Back" />
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  </motion.div>
</HeroRight>

                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default HeroSection



