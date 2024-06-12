import React from "react";
import styled from "styled-components";
import github from "../assets/github.png";

const ProjectsContainer = styled.div`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(226 232 240);
  }
  h3 {
    font-size: 1rem;
    line-height: 1.75rem;
    color: rgb(226 232 240);
    padding-left: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 5px;
    h3 {
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;
const ProjectsUl = styled.ul`
  list-style-type: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProjectsLI = styled.li`
  color: #8892b0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  padding-left: 3rem;
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
  @media (max-width: 768px) {
    font-size: 0.7rem;
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
  padding-left: 3rem;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const DateStyle = styled.span`
  font-size: 13px;
  color: #8892b0;
  font-weight: bold;
  margin-right: 5px;
`;

const DateContainer = styled.div`
  margin-bottom: 10px; /* Optional: Add some margin below the date and text */
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <div>
        <DateContainer>
          <h2>
            <DateStyle>2024</DateStyle> Deep Fake Detection
          </h2>
        </DateContainer>
        <h3>Browser Extension </h3>
        <ProjectsUl>
          <ProjectsLI>
            Technologies Used: Neural Network (CNN), Python Flask
          </ProjectsLI>
          <ProjectsLI>
            Developed a browser extension to detect deep fake images.
          </ProjectsLI>
          <ProjectsLI>
            Users can upload suspicious images via a drop-zone in the popup or
            through the context menu.
          </ProjectsLI>
          <ProjectsLI>
            Images are processed by a CNN model to determine the likelihood of
            being fake.
          </ProjectsLI>
          <ProjectsLI>
            The extension injects an iframe displaying the prediction result.
          </ProjectsLI>
          <IconLink
            href="https://github.com/Ali-hadi-Matar/deep-fake-image-detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImage src={github} alt="GitHub" />
          </IconLink>
        </ProjectsUl>
      </div>
      <div>
        <DateContainer>
          <h2>
            <DateStyle>2023 </DateStyle> Todo-App{" "}
          </h2>
        </DateContainer>

        <h3>Mobile</h3>
        <ProjectsUl>
          <ProjectsLI>Technologies Used: Flutter</ProjectsLI>
          <ProjectsLI>
            Created a cross-platform application for managing tasks.
          </ProjectsLI>
          <ProjectsLI>
            Features include adding tasks with specified times and additional
            notes.
          </ProjectsLI>
          <ProjectsLI>
            Ensures compatibility on both iOS and Android devices.
          </ProjectsLI>
          <IconLink
            href="https://github.com/Ali-hadi-Matar/todo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImage src={github} alt="GitHub" />
          </IconLink>
        </ProjectsUl>
      </div>
    </ProjectsContainer>
  );
};
export default Projects;
