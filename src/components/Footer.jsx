// src/components/Footer.js
import React, { useState } from 'react';
import {styled, keyframes} from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const colors = {
    richBlack: '#0d1b2a',
    oxfordBlue: '#1b263b',
    yinmnBlue: '#415a77',
    silverLakeBlue: '#778da9',
    platinum: '#e0e1dd',
};

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterContainer = styled.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${gradientBackground} 15s ease infinite;    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const AccordionContainer = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
`;

const Section = styled.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        border-bottom: 1px solid ${colors.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`;

const SectionTitle = styled.h3`
    color: ${colors.yinmnBlue};
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }

    &:before {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background: ${colors.yinmnBlue};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:before {
        width: 100%;
    }
`;

const NavLink = styled.a`
    color: ${colors.platinum};
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.yinmnBlue};
        text-decoration: underline;
    }
`;

const AccordionButton = styled.div`
    color: ${colors.platinum};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
    }
`;

const AccordionContent = styled.div`
    max-height: ${props => (props.isOpen ? '300px' : '0')};
    overflow: hidden;
    color: ${colors.platinum};
    background: ${colors.oxfordBlue};
    border-radius: 5px;
    padding: ${props => (props.isOpen ? '10px' : '0')};
    transition: max-height 0.5s ease, padding 0.5s ease;
`;

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <FooterContainer>
            <FooterContent>
                <Section>
                    <SectionTitle>My Details</SectionTitle>
                    <div>Name: Your Name</div>
                    <div>Location: Your City, Country</div>
                    <div>Email: your-email@example.com</div>
                    <div>Phone: +123-456-7890</div>
                </Section>
                <Section>
                    <SectionTitle>Topics</SectionTitle>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                </Section>
                <Section>
                    <SectionTitle>Connect</SectionTitle>
                    <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </NavLink>
                    <NavLink href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </NavLink>
                    <NavLink href="mailto:your-email@example.com">
                        <FaEnvelope /> Let's Connect
                    </NavLink>
                </Section>
            </FooterContent>
            <AccordionContainer>
                <AccordionButton onClick={() => toggleSection('details')}>
                    My Details
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'details'}>
                    <div>Name: Your Name</div>
                    <div>Location: Your City, Country</div>
                    <div>Email: your-email@example.com</div>
                    <div>Phone: +123-456-7890</div>
                </AccordionContent>
                
                <AccordionButton onClick={() => toggleSection('topics')}>
                    Topics
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'topics'}>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                </AccordionContent>

                <AccordionButton onClick={() => toggleSection('connect')}>
                    Connect
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'connect'}>
                    <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </NavLink>
                    <NavLink href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </NavLink>
                    <NavLink href="mailto:your-email@example.com">
                        <FaEnvelope /> Let's Connect
                    </NavLink>
                </AccordionContent>
            </AccordionContainer>
        </FooterContainer>
    );
};

export default Footer;
