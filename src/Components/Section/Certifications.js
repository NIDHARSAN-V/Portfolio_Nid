import React from 'react'
import styled from 'styled-components'
import emailjs from "@emailjs/browser"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 40px;
`;

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
`;

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
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


function Certifications() {
  return (
    <Container>
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some of my certifications that showcase my skills and knowledge.</Desc>
      </Wrapper>
    </Container>
  )
}

export default Certifications
