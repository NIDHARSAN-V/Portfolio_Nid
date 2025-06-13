import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const glow = keyframes``;

const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, #000 0%, #111 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ImageBorder = styled(motion.div)`
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  animation: ${glow} 2s ease-in-out infinite;
  filter: drop-shadow(0 0 10px currentColor);
`;

const AnimatedImage = styled(motion.img)`
  position: absolute;
  width: 55px;
  height: 55px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px currentColor);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const CenterLogo = styled(motion.img)`
  width: 70px;
  height: 70px;
  object-fit: contain;
  animation: ${pulse} 2s infinite ease-in-out;
  filter: drop-shadow(0 0 10px #fff);
`;

const Loader = () => {
  const control0 = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const borderControl = useAnimation();

  const controls = [control0, control1, control2, control3, control4, control5];

  const [colors] = useState(() =>
    Array(6).fill().map(() => `hsl(${Math.random() * 360}, 100%, 60%)`)
  );

  const [borderColor] = useState(
    () => `hsl(${Math.random() * 360}, 100%, 60%)`
  );

  useEffect(() => {
    const borderPositions = Array(6).fill().map((_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.27;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
    });

    const animationCycle = async () => {
      await new Promise(res => setTimeout(res, 100)); // Wait to ensure mount

      await Promise.all(
        controls.map((control, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * (window.innerWidth / 2);
          const y = Math.sin(angle) * (window.innerHeight / 2);
          return control.set({
            opacity: 0,
            x,
            y,
            scale: 1,
          });
        })
      );

      await borderControl.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });

      for (let i = 0; i < controls.length; i++) {
        await controls[i].start({
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1.6,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          }
        });
      }

      await new Promise(res => setTimeout(res, 600));

      await Promise.all(
        controls.map((control, i) =>
          control.start({
            x: borderPositions[i].x,
            y: borderPositions[i].y,
            scale: 1,
            transition: {
              duration: 1.1,
              ease: "easeInOut",
            }
          })
        )
      );

      await borderControl.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });

      await new Promise(res => setTimeout(res, 1000));
      animationCycle();
    };

    animationCycle();

    return () => {
      controls.forEach(c => c.stop());
      borderControl.stop();
    };
  }, []);

  return (
    <Container>
      <ImageBorder
        animate={borderControl}
        initial={{ opacity: 0 }}
        style={{ color: borderColor }}
      />

      <CenterLogo src="/logoviper.png" alt="logo" />

      {Array(6).fill().map((_, i) => (
        <AnimatedImage
          key={i}
          src="/logoviper.png"
          animate={controls[i]}
          initial={{ opacity: 0 }}
          style={{ color: colors[i] }}
        />
      ))}
    </Container>
  );
};

export default Loader;
