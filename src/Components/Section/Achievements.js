import React, { useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import styled from 'styled-components';


const imgs = [
  { 
    src: "Ach/tom.png", 
    caption: "Tomatix - Project",
    description: "Our passionate team, TOMATIX — comprising Ragulandiren, Pavish Kumar, Santhosh, Prashanth, Sanchay, Sowmiya, and myself — is thrilled to have reached the final phase of the prestigious Tomato Grand Challenge 🍅, organized by the Government of India, Consumer Affairs 🇮🇳. Our innovative efforts were recognized with both funding support of ₹1.5 Lakh and an additional prize of ₹25,000.",
    color: "#FFD700"
  },

  { 
    src: "Ach/kech.png", 
    caption: "KEC Hackathon 2k24 (Software Edition)",
    description: "We were honored to emerge as the Runner-Up in the KEC Hackathon 2k24 (Software Edition), where we showcased a futuristic GuestHouse booking platform enhanced with Virtual Reality capabilities. Our project combined technology with real-world hospitality challenges, aiming to revolutionize how people book and experience stays through immersive VR interactions and seamless digital workflows.",
    color: "#006400"
  },

  { 
    src: "Ach/ac.png", 
    caption: "Academic Excellence Award 2k23",
    description: "In recognition of consistent academic dedication and hard work, I was awarded the Academic Excellence Award for the year 2k23. With a CGPA of 9.45, this achievement reflects not just grades, but a strong commitment to learning, discipline, and a pursuit of excellence throughout the academic journey.",
    color: "#4B0082"
  },

  { 
    src: "Ach/sm.png", 
    caption: "StartUp Mania 2k25",
    description: "We were thrilled to be shortlisted for the Final Round in StartUp Mania 2k25, a high-energy entrepreneurial contest where innovative minds compete to turn ideas into impactful ventures. Our proposal captured attention for its relevance and potential scalability, and this opportunity significantly strengthened our startup vision and pitching experience.",
    color: "#9932CC"
  },

  { 
    src: "Ach/ruby.png", 
    caption: "Ruby Project Presentation",
    description: "We proudly won the Ruby Project Presentation for our intelligent AI Interview System. The project was designed to simulate real interview environments, provide adaptive feedback, and help candidates prepare more effectively. Our creative approach and technical execution earned us top honors and a well-deserved cash prize.",
    color: "#1E90FF"
  },

  { 
    src: "Ach/csd.png", 
    caption: "HackNovate 2k25",
    description: "In HackNovate 2k25, we achieved first place by addressing the challenge of promoting Indian heritage using cutting-edge AR/VR technology. Our solution delivered a virtual tourism experience that guided users through historical sites and cultural narratives in an interactive 3D space. The project stood out for its creativity, technical depth, and cultural impact — earning us the winner’s title and a cash reward.",
    color: "#1E90FF"
  },

  { 
    src: "Ach/judo1.png", 
    caption: "Sport - Judo",
    description: "Representing my region in the State Judo Championship 2k23-24 was a thrilling experience. Competing in the -73 Kg category, I secured the Gold Medal and was honored with the 'Best Player' award. This achievement not only highlights my competitive spirit but also my dedication to the discipline, strategy, and physical training involved in martial arts.",
    color: "#8B0000"
  },

  { 
    src: "Ach/ju2.png", 
    caption: "Judo - Sport",
    description: "Participating in the Anna University State-Level Judo Championship 2k24-25 was a proud moment in my sporting journey. After intense bouts, I secured 3rd Place in the highly competitive -73 Kg category. This experience sharpened my athletic mindset, improved my resilience under pressure, and deepened my love for the sport.",
    color: "#B22222"
  },
];


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding-top: 30px;
  padding-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin: 20px;
`;

const Title = styled(motion.div)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-top: 10px;
  color: #fff;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
  background: linear-gradient(90deg, #f5f5f5, #d4d4d4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 2rem;
  }
`;

const Desc = styled(motion.div)`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  max-width: 700px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 20px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  perspective: 1000px;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  height: 400px; /* Reduced from original */
  border-radius: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transform-style: preserve-3d;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
`;

const ImageCaption = styled(motion.h3)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(20px);
`;

const ImageDescription = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  transform: translateY(20px);
`;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 300,
  damping: 40,
};

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
  width: 100%;
`;

const Dot = styled(motion.button)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: ${props => props.active ? props.color : "#4a4a4a"};
  position: relative;
  overflow: hidden;
`;

const DotInner = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const NavButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &:focus {
    outline: none;
  }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, ${props => props.color}, #ffffff);
  border-radius: 2px;
`;

const Achievements = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (isHovered) return;
    
    const intervalRef = setInterval(() => {
      setProgress(0);
      setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [isHovered]);

  useEffect(() => {
    if (isHovered) return;
    
    const animation = {
      from: 0,
      to: 100,
      duration: AUTO_DELAY / 1000,
      onUpdate: (latest) => setProgress(latest),
    };
    
    const controls = animate(animation);
    return () => controls.stop();
  }, [imgIndex, isHovered]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const goNext = () => {
    setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const goPrev = () => {
    setImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    setProgress(0);
  };

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </Title>
      <Desc
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The monumental accomplishments of Madara Uchiha that shaped the shinobi world
      </Desc>
      
      <CarouselContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavButton
          onClick={goPrev}
          style={{ left: "10px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </NavButton>
        
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ 
            x: dragX, 
            display: "flex", 
            cursor: "grab",
          }}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          <AnimatePresence mode="wait">
            {imgs.map((img, idx) => (
              <motion.div
                key={idx}
                style={{
                  width: "100%",
                  padding: "0 1rem",
                  flexShrink: 0,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: imgIndex === idx ? 1 : 0.7, 
                  scale: imgIndex === idx ? 1 : 0.9,
                  zIndex: imgIndex === idx ? 1 : 0
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={SPRING_OPTIONS}
              >
                <ImageContainer
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  <div
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <ImageOverlay
                    animate={{ 
                      opacity: isImageHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageCaption
                      animate={{ 
                        y: isImageHovered ? 0 : 20,
                        opacity: isImageHovered ? 1 : 0
                      }}
                      transition={{ delay: isImageHovered ? 0.1 : 0, duration: 0.3 }}
                    >
                      {img.caption}
                    </ImageCaption>
                    <ImageDescription
                      animate={{ 
                        y: isImageHovered ? 0 : 20,
                        opacity: isImageHovered ? 1 : 0
                      }}
                      transition={{ delay: isImageHovered ? 0.2 : 0, duration: 0.3 }}
                    >
                      {img.description}
                    </ImageDescription>
                  </ImageOverlay>
                  <ProgressBar 
                    style={{ width: `${progress}%` }}
                    color={img.color}
                    key={imgIndex}
                  />
                </ImageContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <NavButton
          onClick={goNext}
          style={{ right: "10px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </NavButton>
      </CarouselContainer>

      <DotsContainer>
        {imgs.map((img, idx) => (
          <Dot 
            key={idx}
            onClick={() => {
              setImgIndex(idx);
              setProgress(0);
            }}
            active={idx === imgIndex}
            color={img.color}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <DotInner
              animate={{
                scale: idx === imgIndex ? 1 : 0,
                opacity: idx === imgIndex ? 1 : 0
              }}
              color={img.color}
              transition={{ duration: 0.2 }}
            />
          </Dot>
        ))}
      </DotsContainer>
    </Container>
  );
};

// Helper animation function
function animate({ from, to, duration, onUpdate }) {
  const startTime = performance.now();
  let requestId;
  
  function step(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    const value = from + (to - from) * progress;
    
    onUpdate(value);
    
    if (progress < 1) {
      requestId = requestAnimationFrame(step);
    }
  }
  
  requestId = requestAnimationFrame(step);
  
  return {
    stop: () => cancelAnimationFrame(requestId)
  };
}

export default Achievements;