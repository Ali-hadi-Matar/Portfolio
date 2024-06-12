import React from "react";
import styled from "styled-components";
import github from "../assets/github.png";
const FooterContainer = styled.footer`
  margin-left: 20px;
  background-color: #0a192f;
  color: #8799b9;
  padding: 20px;
  padding-top: 12rem;
  width: auto;
`;

const FooterText = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const SpacialWords = styled.span`
  font-size: 13px;
  color: rgb(226 232 240);
  font-weight: bold;
  margin-right: 5px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Designed to showcase my skills and achievements, this portfolio is built
        with <SpacialWords>React.js</SpacialWords> and{" "}
        <SpacialWords>TypeScript</SpacialWords>, ensuring a seamless and dynamic
        user interface. The styling, meticulously crafted with{" "}
        <SpacialWords>CSS</SpacialWords>, enhances the visual appeal and user
        experience. Hosted effortlessly on <SpacialWords>Vercel</SpacialWords>,
        ensuring fast loading times and reliable performance.
      </FooterText>
      <IconLink
        href="https://github.com/Ali-hadi-Matar/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconImage src={github} alt="Github" />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
