// HeroSection.js

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiFillLinkedin, AiFillGithub, AiOutlineDownload, AiFillEye } from 'react-icons/ai';
import { RiWhatsappFill } from "react-icons/ri";
import { ImMail4 } from "react-icons/im";
import Typewriter from 'typewriter-effect/dist/core';
import profileImage from '../assets/doragacharla_lizy.jpg';
import resume from '../assets/doragacharla_lizy_resume.pdf';
import starIcon from '../assets/star.png';
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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const gearTeeth = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
`;

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  height: 100vh;
  color: ${colors.ghostWhite};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    text-align: center;
      height: 100vh;

  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  max-width: 80%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const LeftSection = styled.div`
  z-index: 1;
  max-width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    top:50px;
  }
`;

const GearCircle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${rotateGear} 20s linear infinite;
  transform: rotate(-45deg);

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius:50px;
    background: url(${starIcon}) center/50% no-repeat;
    box-shadow: 0 0 0 5px ${colors.spaceCadet};
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
  width: 300px;
  height: 300px;
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
  color: ${colors.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
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
  useEffect(() => {
    const typewriter = new Typewriter('#typing-effect-container', {
      strings: ['Currently working as a Front End Developer', 'Passionate in Data Analysis and Data Science'],
      autoStart: true,
      loop: true,
      deleteSpeed: 20,
      delay: 80,
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
       
          To transition from a frontend developer role into a data-focused career as a data analyst or data scientist by leveraging existing technical skills, continuously building expertise in data-related tools and methodologies, developing practical projects, and actively networking with industry professionals to secure relevant opportunities.          </Description>
          <SocialIcons>
            <Icon href="https://www.linkedin.com/in/lizy-d-371971233/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></Icon>
            <Icon href="https://github.com/doragacharlalizy" target="_blank" rel="noopener noreferrer"><AiFillGithub /></Icon>
            <Icon href="mailto:lizydoragacharla@gmail.com" target="_blank" rel="noopener noreferrer"><ImMail4 /></Icon>
            <Icon href="https://wa.me/918106868075" target="_blank" rel="noopener noreferrer"><RiWhatsappFill /></Icon>
          </SocialIcons>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button onClick={scrollToAboutMe}>About Me</Button>
            <Button href={resume} download><AiOutlineDownload /></Button>
            <Button href={resume} target="_blank" rel="noopener noreferrer"><AiFillEye /></Button>
          </div>
        </LeftSection>
      </HeroContainer>
      <AboutMe />
    </>
  );
};

export default Hero;
