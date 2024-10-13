// src/components/Tabs.js
import React, { useState, useEffect, forwardRef } from 'react';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { FaCode, FaCertificate, FaGraduationCap, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import styled from 'styled-components';
import eventBus from './eventBus';

const colors = {
    gunmetal: '#30343fff',
    ghostWhite: '#fafaffff',
    periwinkle: '#e4d9ffff',
    delftBlue: '#273469ff',
    spaceCadet: '#1e2749ff',
};

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const TabButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    background: ${colors.delftBlue};
    position: sticky;
    bottom: 10px;
    border-radius: 30px;
    width: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${colors.ghostWhite};

    @media (max-width: 480px) {
        gap: 10px;
        padding: 5px;
    }
`;

const TabButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.active ? colors.delftBlue : colors.spaceCadet)};
    color: ${colors.ghostWhite};
    border: 1px solid ${props => (props.active ? colors.spaceCadet : colors.spaceCadet)};
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${colors.delftBlue};
    }

    svg {
        margin-right: 8px;
    }

    @media (max-width: 480px) {
        padding: 10px;

        svg {
            margin-right: 0;
        }

        span {
            display: none;
        }
    }
`;

const Tabs = forwardRef((props, ref) => {
    const [activeTab, setActiveTab] = useState('Skills');

    useEffect(() => {
        eventBus.on('activateTab', (tab) => {
            setActiveTab(tab);
        });
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Skills':
                return <Skills />;
            case 'Certificates':
                return <Certificates />;
            case 'Education':
                return <Education />;
            case 'Experience':
                return <Experience />;
            case 'Projects':
                return <Projects />;
            default:
                return <Skills />;
        }
    };

    return (
        <TabsContainer id="knowmore">
            {renderContent()}
            <TabButtons>
                <TabButton active={activeTab === 'Skills'} onClick={() => setActiveTab('Skills')}>
                    <FaCode /> <span>Skills</span>
                </TabButton>
                <TabButton active={activeTab === 'Certificates'} onClick={() => setActiveTab('Certificates')}>
                    <FaCertificate /> <span>Certificates</span>
                </TabButton>
                <TabButton active={activeTab === 'Education'} onClick={() => setActiveTab('Education')}>
                    <FaGraduationCap /> <span>Education</span>
                </TabButton>
                <TabButton active={activeTab === 'Experience'} onClick={() => setActiveTab('Experience')}>
                    <FaBriefcase /> <span>Experience</span>
                </TabButton>
                <TabButton active={activeTab === 'Projects'} onClick={() => setActiveTab('Projects')}>
                    <FaProjectDiagram /> <span>Projects</span>
                </TabButton>
            </TabButtons>
        </TabsContainer>
    );
});

export default Tabs;
