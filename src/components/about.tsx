import React, { forwardRef } from "react";
import styled from "styled-components";

const AboutStyle = styled.div`
  padding-top: 25px;
  padding-right: 150px;
  color: #8799b9;
  @media (max-width: 768px) {
    padding-left: 25px;
    width: 90%;
    font-size: 13px;
  }
`;

const SpacialWords = styled.span`
  color: rgb(226 232 240);
  margin-right: 5px;
  @media (max-width: 768px) {
  }
`;

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <AboutStyle ref={ref} id="about">
      <p>
        I am <SpacialWords>Ali Matar</SpacialWords>, a dedicated and passionate
        recent graduate residing in Beirut, Lebanon. Having recently completed
        my{" "}
        <SpacialWords>
          Bachelor of Science in Computer Science from the Lebanese
          International University
        </SpacialWords>
        , I am equipped with a strong foundation in various programming
        languages including{" "}
        <SpacialWords>Java, PHP, Python, and JavaScript.</SpacialWords>
      </p>
      <p>
        My academic journey has exposed me to the dynamic world of web
        development, where I have gained proficiency in technologies such as{" "}
        <SpacialWords>ReactJS, Redux, and Bootstrap</SpacialWords>, alongside
        valuable experience in machine learning with
        <SpacialWords>
          {" "}
          Convolutional Neural Networks (CNN) and TensorFlow.
        </SpacialWords>
      </p>
      Motivated by a desire to innovate, I have actively contributed to projects
      such as a <SpacialWords>browser extension</SpacialWords> for deep fake
      image detection and a cross-platform task management application built
      using <SpacialWords>Flutter</SpacialWords>. With a keen eye for detail and
      a thirst for knowledge, I am eager to embark on new challenges and
      contribute positively to the ever-evolving field of technology.
    </AboutStyle>
  );
});
export default About;
