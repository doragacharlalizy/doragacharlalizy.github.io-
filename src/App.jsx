// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import styled from 'styled-components';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
// import Certificates from './components/Certificates';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import NewSection from './components/NewSection';
import Tabs from './components/Tabs';

const AppContainer = styled.div`
    font-family: Arial, sans-serif;
`;

function App() {
    return (
        <AppContainer>
            <TopBar />
            <Hero />
            <Tabs/>
            {/* <Skills/>
            <Certificates/>
            <Education/>
            <Experience/>
            <Projects/>*/}
            <Connect/> 
            {/* <NewSection/> */}
            <Footer/>
            {/* Other sections will go here */}
        </AppContainer>
    );
}

export default App;
