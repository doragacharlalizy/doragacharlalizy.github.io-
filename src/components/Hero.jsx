// HeroSection.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineDownload, AiFillEye } from 'react-icons/ai';
import Typewriter from 'typewriter-effect/dist/core'; // Ensure you have installed 'typewriter-effect'
import profileImage from '../assets/doragacharla_lizy.jpg';
import resume from '../assets/doragacharla_lizy_resume.pdf'; // Importing the resume
import starIcon from '../assets/star.png'; // Import the star icon
import AboutMe from "../components/AboutMe";

// Colors
const colors = {
  gunmetal: '#30343f',
  ghostWhite: '#fafaff',
  periwinkle: '#e4d9ff',
  delftBlue: '#273469',
  spaceCadet: '#1e2749',
};

// Keyframes for animations
const rotateGear = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const gearTeeth = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
`;

const pulsateBackground = keyframes`
  0% {
    background-color: ${colors.delftBlue};
  }
  50% {
    background-color: ${colors.periwinkle};
  }
  100% {
    background-color: ${colors.delftBlue};
  }
`;

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  height: 80vh;
  position: relative;
  color: ${colors.ghostWhite};
  gap: 30px;
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2.2em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  max-width: 80%;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;
  max-width: 50%;
  text-align: start;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    top: 40px;
  }

  @media (max-width: 768px) {
          width: 100%;
    margin-bottom: 20px;
  }
`;

const GearCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${rotateGear} 20s linear infinite;
  transform: rotate(-45deg);

  @media (max-width: 768px) {
    display: none; // Hide gear circle on mobile screens
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    background: ${colors.delftBlue};
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${colors.spaceCadet};
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${starIcon}) center/50% no-repeat;
    animation: ${gearTeeth} 2s linear infinite;
  }

  &:before {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TypingAnimationContainer = styled.div`
  font-size: 2.2em;
  margin-bottom: 20px;
  color: ${colors.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.a`
  font-size: 2.5em;
  color: ${colors.ghostWhite};
  cursor: pointer;
  margin-right: 20px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.periwinkle};
    transform: scale(1.2);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: ${colors.gunmetal};
  font-weight: 600;
  background-color: ${colors.ghostWhite};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${colors.spaceCadet};
    color: ${colors.ghostWhite};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
`;

const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 2em;
  color: ${colors.ghostWhite};
  z-index: 10;

  &:after {
    content: 'v';
  }

  &:hover {
    color: ${colors.delftBlue};
  }
`;

const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const typewriter = new Typewriter('#typing-effect-container', {
      strings: ['Front End Developer', 'Data Analyst'],
      autoStart: true,
      loop: true,
      deleteSpeed: 20,
      delay: 80,
      onComplete: () => setIsTypingComplete(true),
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroContainer id="home">
        <RightSection>
          <GearCircle />
          <ImageContainer>
            <Image src={profileImage} alt="Profile" />
          </ImageContainer>
        </RightSection>
        <LeftSection>
          <Heading>Hi, I'm Lizy Doragacharla</Heading>
          <TypingAnimationContainer id="typing-effect-container" />
          <Description>
            I'm a passionate Front End Developer and Data Analyst with a love for creating
            engaging user experiences and deriving insights from data.
          </Description>
          <SocialIcons>
            <Icon href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></Icon>
            <Icon href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub /></Icon>
            <Icon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></Icon>
            <Icon href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></Icon>
          </SocialIcons>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="#about" onClick={scrollToAboutMe}>About Me</Button>
            <Button href={resume} download>
              <AiOutlineDownload />
            </Button>
            <Button href={resume} target="_blank" rel="noopener noreferrer">
              <AiFillEye />
            </Button>
          </div>
        </LeftSection>
      </HeroContainer>

      {/* About Me Section */}
      <AboutMe />
    </>
  );
};

export default Hero;
