// Skills.js

import React from 'react';
import styled from 'styled-components';

// Import skill images (ensure you have these images in your assets folder)
import skill1 from '../assets/python.webp';
import skill2 from '../assets/react.webp';
import skill3 from '../assets/c-.webp';
import skill4 from '../assets/html.webp';
import skill5 from '../assets/css.webp';
import skill6 from '../assets/js.webp';
import skill7 from '../assets/sql.webp';
import skill8 from '../assets/php.webp';
import skill9 from '../assets/aws.webp';
import skill10 from '../assets/jira.webp';

const colors = {
    gunmetal: '#30343f',
    ghostWhite: '#fafaff',
    periwinkle: '#e4d9ff',
    delftBlue: '#273469',
    spaceCadet: '#1e2749',
};

const SkillsContainer = styled.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1dd;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;
const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, ${colors.spaceCadet} 30%, ${colors.delftBlue} 100%);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 2px solid ${colors.ghostWhite};

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 480px) {
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const SkillImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10%;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }
`;

const SkillName = styled.p`
    font-size: 1em;
    margin-top: 10px;
    color: ${colors.ghostWhite};
margin-bottom:0;
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`;
const skills = [
    { id: 1, image: skill1, title: 'Python' },
    { id: 2, image: skill2, title: 'React' },
    { id: 3, image: skill3, title: 'C' },
    { id: 4, image: skill4, title: 'HTML' },
    { id: 5, image: skill5, title: 'CSS' },
    { id: 6, image: skill6, title: 'JS' },
    { id: 7, image: skill7, title: 'SQL,postgreSQL' },
    { id: 8, image: skill8, title: 'PHP' },
    { id: 9, image: skill9, title: 'AWS' },
    { id: 10, image: skill10, title: 'Jira' },
    { id: 11, image: skill10, title: 'Django Restframework' },
    { id: 12, image: skill10, title: 'Data Sceince'},
    { id: 13, image: skill10, title: 'PoweR BI' },
    { id: 14, image: skill10, title: 'Tabeleu' },

];

const Skills = () => {
    return (
        <SkillsContainer>
            <Title>Skills</Title>
            <SkillsGrid>
                {skills.map(skill => (
                    <SkillContainer key={skill.id}>
                        <SkillImage src={skill.image} alt={skill.title} />
                        <SkillName>{skill.title}</SkillName>
                    </SkillContainer>
                ))}
            </SkillsGrid>
        </SkillsContainer>
    );
};

export default Skills;
