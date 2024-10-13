import React from 'react';
import styled from 'styled-components';
import project1 from '../assets/project1.png'; // Replace with actual image for 'Water Quality Prediction'
import project2 from '../assets/project2.png'; // Replace with actual image for 'Mera Sahai Platform'
import skill4 from '../assets/skill4.jpg'; // Example image placeholder
import skill5 from '../assets/skill5.jpg'; // Example image placeholder
import skill6 from '../assets/skill6.jpg'; // Example image placeholder

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

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProjectItem = styled.div`
  background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  flex: 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;

  ${ProjectItem}:hover & {
    transform: scale(0.85);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto; /* Aligns the container to the bottom */
  flex-wrap: wrap;
  justify-content: start; /* Align buttons horizontally centered */

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
    justify-content:center;
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
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
`;

const projects = [
  {
    title: 'MERA SAHAI: Mera Sahai Platform',
    description:
      "Played a pivotal role as a web developer in the development of the Mera Sahai platform, successfully developing and delivering assigned modules, and taking full responsibility for their implementation.",
    demoLink: '/assets/mera_sahai_project.pdf', // Replace with actual demo link if available
    codeLink: 'https://github.com/my-portfolio', // Replace with actual code repository link if available
    imageUrl: project1,
  },
  {
    title: 'DEHAZING OF MULTISPECTRAL REMOTE SENSING IMAGES',
    description:
      'Developed deep learning algorithms to enhance satellite images affected by haze, employing noise removal techniques and comparing their effectiveness with the Dark Object Subtraction method.',
    demoLink: '/assets/dehazing_project.pdf', // Replace with actual demo link if available
    codeLink: 'https://github.com/my-portfolio', // Replace with actual code repository link if available
    imageUrl: project2, // Replace with relevant image for this project
  },
];

const Projects = () => {
  return (
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {/* <ProjectLinks>
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
              </ProjectLinks> */}
            </ProjectContent>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
