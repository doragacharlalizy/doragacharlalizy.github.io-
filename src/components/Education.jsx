import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EducationEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  background-color: ${({ isActive }) => (isActive ? '#1e2749ff' : '#f0f0f0')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  transform: ${({ isActive }) => (isActive ? 'scale(1.05)' : 'scale(1)')};
  color: ${({ isActive }) => (isActive ? '#fafaffff' : '#1e2749ff')};
  border: ${({ isActive }) => (isActive ? '2px solid #fafaffff' : 'none')};
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
      @media (max-width: 480px) {
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(1)')};
  width:auto;
  }
`;

const EventContent = styled.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`;

const EventTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const EventDetails = styled.div`
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(135deg, #273469ff, #e4d9ffff)' : 'linear-gradient(135deg, #415a77, #1b263b)'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (min-width: 768px) {
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
  }
`;

const Line = styled.div`
  width: 5px;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;

  @media (min-width: 768px) {
    left: 0;
    top: 50%;
    height: calc(100% - 40px);
  }
`;

const Education = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const educationData = [
    {
      title: 'SSC',
      duration: '2017-2018',
      institution: 'Keshava Reddy High School',
      details: 'Achieved 10.00 GPA',
    },
    {
      title: 'Intermediate (MPC)',
      duration: '2018-2020',
      institution: 'Tirumala Junior College, Katheru',
      details: 'Achieved 96% marks',
    },
    {
      title: 'B.Tech (CSE)',
      duration: '2020-2024',
      institution: 'Adikavi Nannaya University, Rajanagaram',
      details: 'Achieved 8.8 CGPA',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prevEvent) => (prevEvent + 1) % educationData.length);
    }, 3000); // Change event every 3 seconds

    return () => clearInterval(interval);
  }, [educationData.length]);

  const handleEventClick = (index) => {
    setActiveEvent(index);
  };

  return (
    <Container>
      <Title>Education Journey</Title>
      <Timeline>
        {educationData.map((event, index) => (
          <EducationEvent
            key={index}
            isActive={index === activeEvent}
            onClick={() => handleEventClick(index)}
          >
            <Circle isActive={index === activeEvent}>{index + 1}</Circle>
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              <EventDetails>
                <div>{event.duration}</div>
                <div>{event.institution}</div>
                <div>{event.details}</div>
              </EventDetails>
            </EventContent>
          </EducationEvent>
        ))}
      </Timeline>
    </Container>
  );
};

export default Education;
