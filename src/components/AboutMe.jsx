import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaChartLine, FaLaptopCode, FaRocket } from 'react-icons/fa'; // Importing icons
import { IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";
import image1 from '../assets/skill1.jpg';
import image2 from '../assets/skill2.jpg';
import image3 from '../assets/skill3.jpg';
import image4 from '../assets/skill4.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: #fff;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
    
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
   
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${props => props.fadeIn ? fadeIn : fadeOut} 1s ease-in-out;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  margin: 20px 0;

  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const icons = [
  <FaRocket />,
  <FaLaptopCode />,
  <FaChartLine />,
  <FaReact />
];

const AboutMe = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const content = [
    {
      title: 'Aspiring Learner',
      paragraph: 'I am an enthusiastic learner exploring various domains to broaden my skills.',
      image: image1,
      icon: icons[0]
    },
    {
      title: 'Frontend Developer',
      paragraph: 'I specialize in creating user interfaces and experiences using modern frontend technologies.',
      image: image2,
      icon: icons[1]
    },
    {
      title: 'Data Analyst',
      paragraph: 'I analyze data to derive insights and make informed decisions for business growth.',
      image: image3,
      icon: icons[2]
    },
    {
      title: 'Future Learner',
      paragraph: 'I aspire to continually learn and adapt to new technologies and challenges.',
      image: image4,
      icon: icons[3]
    }
    // Add more content as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % content.length);
        setFadeIn(true);
      }, 1000);
    }, 5000); // Change content every 5 seconds
    return () => clearInterval(interval);
  }, [content.length]);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
      setFadeIn(true);
    }, 500);
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
      setFadeIn(true);
    }, 500);
  };

  return (
    <Container id="aboutme">
      <ContentContainer>
        <Section fadeIn={fadeIn}>
          <Title>
            {content[index].icon} {content[index].title}
          </Title>
          <Paragraph>{content[index].paragraph}</Paragraph>
        </Section>
        <ImageContainer>
          <Image src={content[index].image} alt={content[index].title} />
        </ImageContainer>
      </ContentContainer>
      <ArrowContainer>
        <ArrowButton onClick={handlePrev}><IoArrowUpCircle /></ArrowButton>
        <ArrowButton onClick={handleNext}><IoArrowDownCircle /></ArrowButton>
      </ArrowContainer>
    </Container>
  );
};

export default AboutMe;
