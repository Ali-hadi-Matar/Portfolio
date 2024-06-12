import React, { forwardRef } from "react";
import styled from "styled-components";
const SkillsStyle = styled.div`
  padding-top: 15rem;
  color: #8799b9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`;

const SkillsH2 = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(226 232 240);
  margin-bottom: 2rem;
`;

const SkillsUl = styled.ul`
  list-style-type: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const SkillsLI = styled.li`
  color: #8892b0;
  text-decoration: none;
  font-size: 1rem;
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
    width: 0;
    height: 1px;
    background: #8892b0;
    transition: all 0.3s ease;
  }

  &.active,
  &:hover {
    color: rgb(226 232 240);
    font-size: 1.2rem;

    &:before {
      width: 30px;
      background: #61dafb;
    }
  }
`;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SkillsStyle ref={ref} id="skills">
      <SkillsContainer>
        <SkillsUl>
          <SkillsLI>JavaScript</SkillsLI>
          <SkillsLI>TypeScript</SkillsLI>
          <SkillsLI>ReactJS</SkillsLI>
          <SkillsLI>Redux</SkillsLI>
          <SkillsLI>Bootstrap</SkillsLI>
          <SkillsLI>Python</SkillsLI>
          <SkillsLI>Machine Learning</SkillsLI>
          <SkillsLI>TensorFlow</SkillsLI>
        </SkillsUl>
        <SkillsUl>
          <SkillsLI>Flutter</SkillsLI>
          <SkillsLI>Convolutional Neural Networks</SkillsLI>
          <SkillsLI>Java</SkillsLI>
          <SkillsLI>PHP</SkillsLI>
          <SkillsLI>Webpack</SkillsLI>
          <SkillsLI>Chrome Extension</SkillsLI>
          <SkillsLI>Python Flask</SkillsLI>
          <SkillsLI>ES6, jQuery, Bootstrap, CSS</SkillsLI>
        </SkillsUl>
      </SkillsContainer>
    </SkillsStyle>
  );
});

export default Skills;
