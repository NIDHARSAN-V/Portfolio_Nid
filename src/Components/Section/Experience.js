import React from 'react'
import styled from 'styled-components'
import "react-vertical-timeline-component/style.min.css"
import { experiences } from '../../Data/constants'
import ExperienceCard from '../Cards/ExperienceCard'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import EarthCanvas from '../canvas/red'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top: 40px;
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
margin-bottom: 40px;
`
// const VerticalTimeLine = styled.div`
/* display: flex;
flex-direction: column; */




function Experience() {
  return (
    <Container id='Education'>

              <Wrapper>
                <Title>
                   Experience
                </Title>
                <Desc>
                    My Work experience as a software engineer
                </Desc>
                <VerticalTimeline>
                    {experiences.map((exp , index) => (
                       
                       <ExperienceCard key={index} experience={exp}/>
                    ))}
                </VerticalTimeline>
              </Wrapper>
              <EarthCanvas/>

    </Container>  )
}

export default Experience
