import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const HeroImg = require("../../images/new.jpg");

const GradientCardContainer = styled(motion.div)`
  position: relative;
  padding: 4px;
  border-radius: 14px;
  &:hover {
    .gradient-bg {
      opacity: 1;
    }
  }
`;

const GradientBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background-size: 400% 400%;
  z-index: 1;
  opacity: 0.6;
  transition: opacity 0.5s ease;
  
  &.blur {
    filter: blur(12px);
  }
`;

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-overflow: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme})=>theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme})=>theme.text_secondary+80};
  @media only screen and (max-width:768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({theme}) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  position: relative;
  cursor: pointer;
  transition: max-height 0.5s ease-in-out, opacity 0.4s ease;
  max-height: ${({ expanded }) => (expanded ? '500px' : '60px')}; // adjust height based on approx. 3 lines
  opacity: ${({ expanded }) => (expanded ? 1 : 0.8)};
  
  &:hover {
    color: ${({theme}) => theme.text_secondary};
  }
`;


const ExpandIndicator = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.card};
  padding-left: 4px;
  color: ${({theme}) => theme.primary};
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.div`
  width:38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border: 3px solid ${({theme})=>theme.card};
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

function ProjectsCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  
  const gradientVariants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  
  const gradientTransition = {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
  };

  const checkTextOverflow = (el) => {
    if (el) {
      setNeedsExpansion(el.scrollHeight > el.clientHeight);
    }
  };

  return (
    <GradientCardContainer>
      <GradientBackground
        className="gradient-bg blur"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
        transition={gradientTransition}
        style={{
          background: "radial-gradient(circle farthest-side at 0 100%,#00ccb1,transparent),radial-gradient(circle farthest-side at 100% 0,#7b61ff,transparent),radial-gradient(circle farthest-side at 100% 100%,#ffc414,transparent),radial-gradient(circle farthest-side at 0 0,#1ca0fb,#141316)"
        }}
      />
      <GradientBackground
        className="gradient-bg"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
        transition={gradientTransition}
        style={{
          background: "radial-gradient(circle farthest-side at 0 100%,#00ccb1,transparent),radial-gradient(circle farthest-side at 100% 0,#7b61ff,transparent),radial-gradient(circle farthest-side at 100% 100%,#ffc414,transparent),radial-gradient(circle farthest-side at 0 0,#1ca0fb,#141316)"
        }}
      />
      
      <Card>
        <Image />
        
        <Tags>
          {project.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </Tags>

        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description 
            expanded={expanded}
            ref={checkTextOverflow}
            onMouseOver={() => setExpanded(true)}
            onMouseOut={() => setExpanded(false)}
          >
            {project.description}
        
          </Description>
        </Details>

        <Members>
          {(project.members || []).map((member, index) => (
            <Avatar key={index} src={member.img || HeroImg} alt={member.name} />
          ))}
        </Members>

        <Button href={project.github} target="_blank">
          View Project
        </Button>
      </Card>
    </GradientCardContainer>
  );
}

export default ProjectsCard;