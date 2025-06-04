import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';

const Top = styled.div`
  width: 100%;
  gap: 12px;


`;

const Image = styled.img`
  width: 50px;
  margin-top: 4px;
  border-radius: 50%;
  /* object-fit: cover; */
  @media only screen and (max-width:768px)
  {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 16px;
  font-weight: 600;
  color:${({theme}) => theme.text_primary+99}
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500px;
    color: ${({theme})=> theme.text_secondary+99};
@media only screen and (max-width: 768px)
{
  font-size: 12px;
}

`
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme})=> theme.text_secondary+99};
  @media only screen and (max-width: 768px)
{
  font-size: 10px;
}
`

const Description = styled.div`
  width:100%;

font-size: 15px;
font-weight: 400;
color:${({theme}) => theme.text_primary+99};
margin-bottom: 10px;
@media only screen and (max-width: 768px)
{
  font-size: 12px;
}
`
const Span = styled.div`
  
display: -webkit-box;
max-width: 100%;
`

const Skills = styled.div`
  width: 100%;
  display: flex;
  /* gap: 12px; */
  margin-top: 10px;
 

`

const Skill =styled.div`
font-size: 15px;
font-weight: 400;
color:${({theme}) => theme.text_primary+99};

@media only screen and (max-width: 768px)
{
  font-size: 12px;
}

`

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

`

function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }

      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#1d1836',
        color: '#fff',
        boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
        backgroundColor: 'rgba(17, 25, 40, 0.83)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        borderRadius: '6px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid rgba(255, 255, 255, 0.3)',
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} />
      </Top>
      <Body>
        <Role>{experience.role}</Role>
        <Company>{experience.company}</Company>
        <Date>{experience.date}</Date>
      </Body>
      <Description>
        <Span>{experience.desc}</Span>
        <>
        <br></br>
          <Skills>
          <br />
          <ItemWrapper>
          
              {experience.skills?(
              experience.skills.map((skill, index) => (
                <Skill key={index}><li>{skill}</li></Skill>
              ))
            ) : (
              <p></p> 
            )}
            </ItemWrapper>
                
            </Skills>
            

        </>

      </Description>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;



