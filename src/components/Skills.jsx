import React from 'react';
import styled from 'styled-components';

// Import skill images (ensure you have these images in your assets folder)
import python from '../assets/python.webp';
import skill2 from '../assets/skill2.jpg';
import skill3 from '../assets/skill3.jpg';
import skill4 from '../assets/skill4.jpg';
import skill5 from '../assets/skill5.jpg';
import skill6 from '../assets/skill6.jpg';

const colors = {
    gunmetal: '#30343fff',
    ghostWhite: '#fafaffff',
    periwinkle: '#e4d9ffff',
    delftBlue: '#273469ff',
    spaceCadet: '#1e2749ff',
};

const SkillsContainer = styled.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1ddff;
`;

const Title = styled.h2`
    font-size: 2em;
    margin-bottom: 30px;
    color: ${colors.ghostWhite}; /* Platinum */
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6 items per row */
    gap: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(5, 1fr); /* 4 items per row for smaller screens */
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); /* 3 items per row for tablets */
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* 2 items per row for mobile phones */
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
    position: relative;
    border: 2px solid ${colors.ghostWhite};
    
    @media (max-width: 480px) {
        height: auto;
        padding: 10px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const SkillImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
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
    
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`;

const skills = [
    { id: 1, image: python, title: 'Python' },
    { id: 2, image: skill2, title: 'Skill 2' },
    { id: 3, image: skill3, title: 'Skill 3' },
    { id: 4, image: skill4, title: 'Skill 4' },
    { id: 5, image: skill5, title: 'Skill 5' },
    { id: 6, image: skill6, title: 'Skill 6' },
    { id: 7, image: python, title: 'Python' },
    { id: 8, image: skill2, title: 'Skill 2' },
    { id: 9, image: skill3, title: 'Skill 3' },
    { id: 10, image: skill4, title: 'Skill 4' },
    { id: 11, image: skill5, title: 'Skill 5' },
    { id: 12, image: skill6, title: 'Skill 6' },
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
