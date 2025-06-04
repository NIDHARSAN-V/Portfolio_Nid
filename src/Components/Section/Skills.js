import React from 'react'
import styled from 'styled-components'
import { skills } from '../../Data/constants'
import { Tilt } from 'react-tilt'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
/* background-color: red;
opacity: 0.4; */

`
const Wrapper = styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
max-width: 1100px;
gap: 12px;

@media (max-width: 960px)
{
    flex-direction: column;
}
`


const Title = styled.div`
font-size: 52px;
font-weight: 600;
text-align: center;
margin-top: 20px;
/* border: 2px solid red;
background-color: red; */
color: ${({theme})=> theme.text_primary};
@media (max-width: 768px)
{
    margin-top: 12px;
    font-size: 32px;
}
`
const Desc = styled.div`
font-size: 18px;
font-weight: 600;
text-align: center;
/* margin-top: 20px; */
color: ${({theme})=> theme.text_secondary};
margin-bottom: 40px;

@media (max-width: 768px)
{
   
    font-size: 16px;
}
`

const SkillContainer = styled.div`
width: 100%;
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
margin-top: 20px;
gap: 50px;
justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17,25,40,0.83);
  border: 1px solid rgba(255,255,255,0.125);
  box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

  &:hover {
    transform: rotate(2deg) translate(10px, 10px); 
  }
`


const SkillTitle = styled.div`
font-size: 28px;
font-weight: 600;
margin-bottom: 20px;
text-align: center;
color: ${({theme})=> theme.text_secondary};
`

const SkillList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 12px;
margin-bottom: 20px;
`

const SkillItem = styled.div`
font-size: 16px;
font-weight: 400;
color: ${({theme})=>theme.text_primary+80};
border: 1px solid ${({theme})=>theme.text_primary+80};
border-radius: 12px;
padding: 12px 16px;
align-items: center;
justify-content: center;
display: flex;
gap: 8px;

@media (max-width: 500px)
{
  font-size: 14px;
  padding: 6px 12px;
}

@media (max-width:768px)
{
  font-size: 14px;
  padding: 6px 12px;
}
`

const SkillImg = styled.img`
width:24px;
height: 24px;

`


function Skills() {
  return (
    <Container id='Skills'>
         <Wrapper>
            <Title>
                Skills
            </Title>
            <Desc>
                Here are some of my skills on which I have been working on past three years
            </Desc>
            <SkillContainer>
               {skills.map((skill, index)=>(
                <Tilt>
                   <Skill key ={index}>
                    <SkillTitle>
                        {skill.title}
                    </SkillTitle>
                    <SkillList>{skill.skills.map((item , index_x)=>(
                      <SkillItem key={index_x}>
                        <SkillImg src={item.image}/>
                        {item.name}
                      </SkillItem>
                    ))}</SkillList>
                 </Skill>
                </Tilt>
               ))}
            </SkillContainer>
         </Wrapper>
    </Container>
  )
}

export default Skills
