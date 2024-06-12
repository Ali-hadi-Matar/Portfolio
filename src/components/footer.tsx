import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-left: 20px;
  background-color: #0a192f;
  color: #8799b9;
  padding: 20px;
  padding-top: 12rem;
  width: 450px;
`;

const FooterText = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
`;

const SpacialWords = styled.span`
  font-size: 13px;
  color: rgb(226 232 240);
  font-weight: bold;
  margin-right: 5px;
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
    </FooterContainer>
  );
};

export default Footer;
