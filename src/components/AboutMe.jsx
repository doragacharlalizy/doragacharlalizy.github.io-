import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaChartLine, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";
import image1 from '../assets/about1.jpg';
import image2 from '../assets/about2.webp';
import image3 from '../assets/about3.jpeg';
import image4 from '../assets/skill2.jpg';

// Keyframes for rotation animation
const rotateUp = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-90deg);
  }
`;

const rotateDown = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
`;

const rotateInUp = keyframes`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`;

const rotateInDown = keyframes`
  from {
    transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CubeContainer = styled.div`
  position: relative;
  width: 50%;
  height: 400px;
  perspective: 1000px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

const Cube = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(${props => props.rotation}deg);
  transition: transform 0.5s;
  animation: ${props => props.slideIn ? (props.direction === 'up' ? rotateInUp : rotateInDown) : (props.direction === 'up' ? rotateUp : rotateDown)} 0.5s forwards;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  backface-visibility: hidden;
  padding: 20px;
 @media (max-width: 768px) {
  flex-direction:column;
  }
`;

const Front = styled(Face)`
  transform: rotateX(0deg) translateZ(200px);
`;

const Back = styled(Face)`
  transform: rotateX(180deg) translateZ(200px);
`;

const Side = styled(Face)`
  transform: rotateY(${props => props.rotate}deg) translateZ(200px);
`;

const Section = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 600px;
  display:flex;align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
    height: 500px;
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
  font-size: 2em;
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
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState('up');
  const [rotation, setRotation] = useState(0);

  const content = [
    {
      title: 'Development Experience',
      paragraph: 'Proficient in React, with expertise in building interactive user interfaces, problem-solving, working with APIs, and developing data-driven components.',
      image: image1,
      icon: icons[0]
    },
    {
      title: 'Data Skills & Learning Journey',
      paragraph: 'Actively learning Python, SQL,stats,power BI,Tabeleu, machine learning,deep learning,computer vision frameworks and nlp basics while working on personal projects in data visualization and predictive modeling.',
      image: image2,
      icon: icons[1]
    },
    {
      title: 'Career Goal',
      paragraph: 'Aspiring to contribute to data-driven solutions by blending development expertise with analytical capabilities and continuously evolving as a data professional.',
      image: image3,
      icon: icons[2]
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIn(false);
      setDirection('up');
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % content.length);
        setRotation(prevRotation => prevRotation - 90);
        setSlideIn(true);
      }, 500);
    }, 10000); // Change content every 10 seconds

    return () => clearInterval(interval);
  }, [content.length]);

  const handleNext = () => {
    setSlideIn(false);
    setDirection('up');
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % content.length);
      setRotation(prevRotation => prevRotation - 90);
      setSlideIn(true);
    }, 500);
  };

  const handlePrev = () => {
    setSlideIn(false);
    setDirection('down');
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex - 1 + content.length) % content.length);
      setRotation(prevRotation => prevRotation + 90);
      setSlideIn(true);
    }, 500);
  };

  return (
    <Container id="aboutme">
      <Title>About Me</Title>
      <Paragraph style={{fontSize:'25px',fontWeight:'bold'}}>Passionate tech professional transitioning from Frontend Development to Data Analytics and Data Science.</Paragraph>
      <CubeContainer>
        <Cube rotation={rotation} slideIn={slideIn} direction={direction}>
          <Front>
            <Section>
              <SectionTitle>
                {content[index].icon} {content[index].title}
              </SectionTitle>
              <Paragraph>{content[index].paragraph}</Paragraph>
            </Section>
            <ImageContainer>
              <Image src={content[index].image} alt={content[index].title} />
            </ImageContainer>
          </Front>
          <Back />
          <Side rotate="90deg" />
          <Side rotate="-90deg" />
        </Cube>
      </CubeContainer>
      <ArrowContainer>
        <ArrowButton onClick={handlePrev}><IoArrowUpCircle /></ArrowButton>
        <ArrowButton onClick={handleNext}><IoArrowDownCircle /></ArrowButton>
      </ArrowContainer>
    </Container>
  );
};

export default AboutMe;
