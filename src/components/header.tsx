import React, { useState } from "react";
import logo from "../assets/logo.png";
import DynamicImage from "./imageComponent";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
interface HeaderProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding: 50px 100px 100px;
  padding-top: 100px;
  padding-left: 150px;
  background: #0a192f;
  text-align: left;
  width: 400px;

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(226 232 240);
  }
  p {
    font-size: 1rem;
    color: #8892b0;
    max-width: 300px;
  }
  @media (max-width: 992px) {
    padding-left: 25px;
    h2 {
      font-size: 15px;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const LinksContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

const MainLink = styled.a<{ isActive: boolean }>`
  color: rgb(226 232 240);
  text-decoration: none;
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledLink = styled.a<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "rgb(226 232 240)" : "#8892b0")};
  text-decoration: none;
  font-size: ${({ isActive }) => (isActive ? "1.2rem" : "1rem")};
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: -20px;
    bottom: 50%;
    width: ${({ isActive }) => (isActive ? "30px" : "0")};
    height: 1px;
    background: ${({ isActive }) => (isActive ? "#61dafb" : "#8892b0")};
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgb(226 232 240);
    font-size: 1.2rem;

    &:before {
      width: 30px;
      background: #61dafb;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #61dafb;
  font-size: 1.5rem;
  margin-right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #40a9ff;
  }
`;
const IconImage = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeSection }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (id: string) => {
    setActiveLink(id);
    scrollToSection(id);
  };

  return (
    <HeaderContainer>
      <MainLink
        isActive={activeLink === "about" || activeSection === "about"}
        onClick={() => scrollToSection("about")}
      >
        Ali Matar
      </MainLink>
      <h2>Software Engineer</h2>
      <p>
        Team player with a passion to build things that make people smile. I'm
        always up for new challenges!
      </p>
      <LinksContainer>
        <StyledLink
          isActive={activeLink === "about" || activeSection === "about"}
          onClick={() => scrollToSection("about")}
        >
          About
        </StyledLink>
        <StyledLink
          isActive={activeLink === "skills" || activeSection === "skills"}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </StyledLink>
        <StyledLink
          isActive={activeLink === "projects" || activeSection === "projects"}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </StyledLink>
      </LinksContainer>

      <IconContainer>
        <IconLink
          href="https://github.com/Ali-hadi-Matar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={github} alt="GitHub" />
        </IconLink>

        <IconLink
          href="http://www.linkedin.com/in/alimatar02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={linkedin} alt="LinkedIn" />
        </IconLink>
        <IconLink
          href="mailto:alihdmatar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={gmail} alt="Gmail" />
        </IconLink>
        <IconLink
          href="tel:+96176093592"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={phone} alt="Phone" />
        </IconLink>
      </IconContainer>

      <Outlet />
    </HeaderContainer>
  );
};

export default Header;
