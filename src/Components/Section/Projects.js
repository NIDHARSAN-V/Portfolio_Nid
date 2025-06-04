import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../Data/constants'
import ProjectsCard from '../Cards/ProjectsCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
  margin-top: 40px;
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

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.primary + '70' : 'transparent')};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary + '70'};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;

`


function Projects() {
    const [toggle, setToggle] = useState("all")

    return (
        <Container id="Projects">
            <Wrapper>
                <Title>Projects</Title>

                <Desc>These are my projects, some with innovation and creativity</Desc>

                <ToggleButtonGroup>
                    <ToggleButton
                        active={toggle === "all"}
                        onClick={() => setToggle("all")}
                    >
                        ALL
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "web app"}
                        onClick={() => setToggle("web app")}
                    >
                        WEB APP
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "ml"}
                        onClick={() => setToggle("ml")}
                    >
                        ML
                    </ToggleButton>

                    <Divider />
                    <ToggleButton
                        active={toggle === "network"}
                        onClick={() => setToggle("network")}
                    >
                        NETWORK
                    </ToggleButton>
                    <Divider />

                    <ToggleButton
                        active={toggle === "cyber"}
                        onClick={() => setToggle("cyber")}
                    >
                        CYBERSEC
                    </ToggleButton>

                </ToggleButtonGroup>

<CardContainer>
    {toggle === "all" && projects.map((project) =><ProjectsCard project={project}/>)}

    {projects.filter((item)=> item.category==toggle).map((project) =><ProjectsCard project={project}/>)}
</CardContainer>

            </Wrapper>
        </Container>
    )
}

export default Projects
