import React, { Suspense, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme } from './Utils/Themes';
import Loader from './Loader'; // Your loader component
import Certifications from './Components/Section/Certifications';

// Lazy load all components
const Navbar = React.lazy(() => import('./Components/Navbar'));
const HeroSection = React.lazy(() => import('./Components/Section/HeroSection'));
const Skills = React.lazy(() => import('./Components/Section/Skills'));
const Experience = React.lazy(() => import('./Components/Section/Experience'));
const Education = React.lazy(() => import('./Components/Section/Education'));
const StyledStarCanvas = React.lazy(() => import('./Components/canvas/Stars'));
const Projects = React.lazy(() => import('./Components/Section/Projects'));
const Contact = React.lazy(() => import('./Components/Section/Contact'));
const Footer = React.lazy(() => import('./Components/Section/Footer'));
const Achievements = React.lazy(() => import('./Components/Section/Achievements'));

// Styled Components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const FooterSection = styled.div`
  padding-top: 150px;
`;

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader at least for 4 seconds
    const timeout = setTimeout(() => setShowLoader(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {showLoader ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Navbar />
            <Body>
              <StyledStarCanvas />
              <HeroSection />

              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>

              <Wrapper>
                <Education />
              </Wrapper>

              <Projects />

              <Wrapper>
                <Achievements />
              </Wrapper>

                <Certifications/>
          

              <Wrapper>
                <Contact />
              </Wrapper>

              <Footer />
            </Body>
          </Suspense>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
