import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImage from '../assets/doragacharla_lizy.jpg';
import sidebarImage from '../assets/doragacharla_lizy3.jpg';

const colors = {
  gunmetal: '#30343fff',
  ghostWhite: '#fafaffff',
  periwinkle: '#e4d9ffff',
  delftBlue: '#273469ff',
  spaceCadet: '#1e2749ff',
};

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
    gap:30px;

  align-items: center;
  padding: 10px 20px; /* Adjusted padding for better spacing */
  background: ${(props) => (props.scrolled ? colors.spaceCadet : colors.delftBlue)};
  color: ${colors.ghostWhite};
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 50px;
  border: 2px solid ${colors.periwinkle};
  width: ${(props) => (props.scrolled ? 'auto' : 'auto')};
  height: ${(props) => (props.scrolled ? '40px' : '60px')};
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
  justify-content:space-between;
    padding: 5px 10px; /* Adjusted padding for small screens */
    width:100%;
    top:0;
    border-radius: 0;
    height: auto;
    border: 0;
  }
`;

const Logo = styled.div`
  font-size: ${(props) => (props.scrolled ? '20px' : '24px')};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${colors.ghostWhite};
  background-image: url(${profileImage});
  background-size: cover;
  background-position: center;
  width: ${(props) => (props.scrolled ? '25px' : '50px')};
  height: ${(props) => (props.scrolled ? '25px' : '50px')};
  border-radius: 50%;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), height 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${colors.ghostWhite};
  margin: 4px 0;
  transition: 0.4s;

  ${({ open }) =>
    open &&
    `
    &:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    position: fixed;
    padding: 30px;
    top: 0;
    left: 0;
    height: 100vh;
    width: 40%;
    background-color: ${colors.spaceCadet};
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${colors.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarLogo = styled.div`
  background-image: url(${sidebarImage});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const SidebarName = styled.div`
  color: ${colors.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`;

const NavLink = styled.a`
  color: ${colors.ghostWhite};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${colors.periwinkle};
  }

  &.active {
    color: ${colors.periwinkle};
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${colors.periwinkle};
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }
`;

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      const sections = ['home', 'aboutme', 'knowmore', 'skills', 'projects', 'connect'];
      const scrollPosition = offset;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition + 50) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <TopBarContainer scrolled={scrolled}>
      <Logo scrolled={scrolled} />
      <Hamburger onClick={() => setOpen(!open)}>
        <Bar open={open} />
        <Bar open={open} />
        <Bar open={open} />
      </Hamburger>
      <NavLinks open={open}>
        <SidebarHeader>
          <SidebarLogo />
          <SidebarName>Doragacharla Lizy</SidebarName>
        </SidebarHeader>
        <NavLink
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => smoothScrollTo('home')}
        >
          Home
        </NavLink>
        <NavLink
          className={activeLink === 'aboutme' ? 'active' : ''}
          onClick={() => smoothScrollTo('aboutme')}
        >
          About me
        </NavLink>
        <NavLink
          className={activeLink === 'knowmore' ? 'active' : ''}
          onClick={() => smoothScrollTo('knowmore')}
        >
          Know More
        </NavLink>
        <NavLink
          className={activeLink === 'connect' ? 'active' : ''}
          onClick={() => smoothScrollTo('connect')}
        >
          Connect
        </NavLink>
      </NavLinks>
    </TopBarContainer>
  );
};

export default TopBar;
