import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedImage = styled(motion.img)`
  position: absolute;
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const cornerCSSPositions = {
  'top-left': { top: 20, left: 20 },
  'top-right': { top: 20, right: 20 },
  'bottom-left': { bottom: 20, left: 20 },
  'bottom-right': { bottom: 20, right: 20 },
};

const images = [
  { src: '/logoviper.png', corner: 'top-left' },
  { src: '/logoviper.png', corner: 'top-right' },
  { src: '/logoviper.png', corner: 'bottom-left' },
  { src: '/logoviper.png', corner: 'bottom-right' },
];

const Loader = ({ onFinish }) => {
  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  useEffect(() => {
    const animate = async () => {
      while (true) { // Infinite loop for continuous animation
        // Initial appear
        await Promise.all(
          controls.map((control) => 
            control.start({
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              transition: { duration: 0.1 }
            })
          )
        );

        // Move to center
        await Promise.all(
          controls.map((control, index) => {
            const corner = images[index].corner;
            const x = corner.includes('right') 
              ? -window.innerWidth / 2 + 60 
              : window.innerWidth / 2 - 60;
            const y = corner.includes('bottom') 
              ? -window.innerHeight / 2 + 60 
              : window.innerHeight / 2 - 60;
            
            return control.start({
              x,
              y,
              transition: { 
                duration: 0.5,
                ease: [0.3, 0.9, 0.3, 1]
              }
            });
          })
        );

        // Explode outwards
        await Promise.all(
          controls.map((control, index) => {
            const direction = index % 2 === 0 ? -1 : 1;
            return control.start({
              x: direction * 200,
              y: -150,
              rotate: direction * 45,
              opacity: 0,
              transition: { 
                duration: 0.4,
                ease: "easeIn"
              }
            });
          })
        );

        // Immediately reset positions for next iteration (no delay)
        controls.forEach(control => {
          control.set({ opacity: 0, x: 0, y: 0, rotate: 0 });
        });
      }
    };

    animate();

    return () => {
      // Cleanup if component unmounts
      controls.forEach(control => control.stop());
    };
  }, [controls]);

  return (
    <Container>
      {images.map((img, i) => {
        const style = cornerCSSPositions[img.corner];
        return (
          <AnimatedImage
            key={i}
            src={img.src}
            style={style}
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={controls[i]}
          />
        );
      })}
    </Container>
  );
};

export default Loader;