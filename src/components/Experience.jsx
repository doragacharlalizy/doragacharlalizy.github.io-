import React from 'react';
import styled from 'styled-components';

const colors = {
  gunmetal: '#30343f',
  ghostWhite: '#fafaff',
  spaceCadet: '#1e2749',
  delftBlue: '#273469',
};

const ExperienceSection = styled.div`
  padding: 50px 20px;
  color: ${colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: ${colors.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 0 auto; /* Center container horizontally */

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; /* Center items horizontally in row layout */
  }
`;

const ExperienceItem = styled.div`
  background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push content to the top and ButtonGroup to the bottom */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Company = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: ${colors.ghostWhite};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Role = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: ${colors.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`;

const Dates = styled.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${colors.ghostWhite};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Responsibilities = styled.ul`
  font-size: 1em;
  color: ${colors.ghostWhite};
  margin-top: 10px;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SkillPill = styled.span`
  background-color: ${colors.spaceCadet};
  color: ${colors.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${colors.ghostWhite};
  display: inline-block;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
  margin-top: auto; /* Push ButtonGroup to the bottom of the container */

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${colors.gunmetal};
  font-weight: 600;
  background-color: ${colors.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${colors.gunmetal};
  
  &:hover {
    background-color: ${colors.spaceCadet};
    color: ${colors.ghostWhite};
    border-color: ${colors.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`;

const Experience = () => {
  const experienceData = [
    {
      company: 'MYC Mine and Yours Company, Vizag',
      role: 'Full Stack Developer (Intern)',
      duration: 'Duration: 3 months',
      description: 'MYC is a leading company in Vizag specializing in innovative solutions for various industries.',
      responsibilities: [
        'Gained insights into business planning and pre-production steps for live projects.',
        'Contributed to various tasks, enhancing understanding of industry practices.',
      ],
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'PhpMyAdmin'],
      certificateUrl: 'path/to/mycCertificate',
      companyUrl: 'https://www.linkedin.com/company/my-company-mine-and-yours-company/',
    },
    {
      company: 'Arthashastra Intelligence, Hyderabad',
      role: 'Frontend Developer (Intern)',
      duration: 'Duration: 5 months',
      description: 'Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.',
      responsibilities: [
        'Developed responsive interfaces using React for frontend components.',
        'Created essential components in React using Django Rest Framework.',
        'Built and maintained entire websites using Wordpress.',
        'Collaborated to implement new features and enhance existing ones.',
      ],
      skills: ['React', 'Django Rest Framework', 'Wordpress'],
      certificateUrl: 'path/to/arthashastraCertificate',
      companyUrl: 'https://arthashastra.ai/',
    },
  ];

  return (
    <ExperienceSection>
      <Title>Experience</Title>
      <ExperienceContainer>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index}>
            <Content>
              <Company>{exp.company}</Company>
              <Role>{exp.role}</Role>
              <Dates>{exp.duration}</Dates>
              <Description>{exp.description}</Description>
              <Responsibilities>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </Responsibilities>
              <Skills>
                {exp.skills.map((skill, idx) => (
                  <SkillPill key={idx}>{skill}</SkillPill>
                ))}
              </Skills>
            </Content>
            <ButtonGroup>
              <Button href={exp.certificateUrl} target="_blank">
                View Certificate
              </Button>
              <Button href={exp.companyUrl} target="_blank">
                Visit Company
              </Button>
            </ButtonGroup>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
