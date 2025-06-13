import React from 'react'
import styled from 'styled-components'

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

const CertificationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

const CertificationCard = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(132, 0, 255);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(162, 29, 29, 0.2);
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
//hello
const CertificationInfo = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.3s ease;
  padding: 0 15px;
  box-sizing: border-box;

  ${CertificationCard}:hover & {
    bottom: 0;
  }
`;

const CertificationName = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

// Sample certifications data
const certifications = [
  {
    id: 1,
    name: "Mongo DB NodeJs Associate Developer",
    image: "madara.jpg"
  },
  {
    id: 2,
    name: "Penetration Testing Udemy",
    image: "madara.jpg"
  },
  {
    id: 3,
    name: "GUVI Machine Learning",
    image: "madara.jpg"
  },
  {
    id: 4,
    name: "Google Foundation of Cyber Security",
    image: "madara.jpg"
  },
  {
    id: 5,
    name: "Google Cyber Security - Play It Safe",
    image: "madara.jpg"
  },
 
];



function Certifications() {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some of my certifications that showcase my skills and knowledge.</Desc>
        <CertificationsContainer>
          {certifications.map((certification) => (
            <CertificationCard key={certification.id}>
              <CertificationImage src={certification.image} alt={certification.name} />
              <CertificationInfo>
                <CertificationName>{certification.name}</CertificationName>
              </CertificationInfo>
            </CertificationCard>
          ))}
        </CertificationsContainer>
      </Wrapper>
    </Container>
  )
}

export default Certifications