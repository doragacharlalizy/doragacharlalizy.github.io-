import React from 'react';
import styled from 'styled-components';

const colors = {
  gunmetal: '#30343f',
  ghostWhite: '#fafaff',
  spaceCadet: '#1e2749',
  delftBlue: '#273469',
};

const ProjectsSection = styled.div`
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

const ProjectsContainer = styled.div`
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

const ProjectItem = styled.div`
  background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const ProjectTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${colors.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ProjectDescription = styled.p`
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

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

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

const projects = [
  {
    title: 'MERA SAHAI: Mera Sahai Platform',
    date: '',
    description:
      "As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",
      demoLink: '/assets/mera_sahai_project.pdf',
    codeLink: 'https://github.com/my-portfolio',

  },
  {
    title: 'College Project: Water Quality Prediction and Classification',
    date: '',
    description:
      'For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.',
      demoLink: '/assets/water_quality_project.pdf',
    codeLink: 'https://github.com/my-portfolio',

  },
];
const Projects = () => {
  return (
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.demoLink && (
                <Button href={project.demoLink} target="_blank">
                  Demo
                </Button>
              )}
              {project.codeLink && (
                <Button href={project.codeLink} target="_blank">
                  Code
                </Button>
              )}
            </ProjectLinks>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
