import React, { useRef, useState, useEffect, useCallback } from "react";
import Header from "./components/header";
import GlobalStyle from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import About from "./components/about";
import styled from "styled-components";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

interface appProps {
  aboutChecked?: boolean;
  skillsChecked?: boolean;
  projectsChecked?: boolean;
}

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column; /* Stack the sections vertically on smaller screens */
  }
`;

const HeaderSection = styled.div`
  flex: 1;
  position: fixed;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 992px) {
    position: static; /* Remove fixed positioning on smaller screens */
    height: auto; /* Allow the content to determine the height */
  }
`;

const MainSection = styled.div`
  flex: 1;
  margin-left: 650px;
  padding-top: 80px;
  overflow-y: auto;

  @media (max-width: 992px) {
    margin-left: 0; /* Remove margin on smaller screens */
    padding-top: 20px; /* Adjust padding for smaller screens */
  }
`;

const App: React.FC<appProps> = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("about");
  const scrollToSection = (id: string) => {
    if (id === "about" && aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (id === "skills" && skillsRef.current) {
      window.scrollTo({
        top: skillsRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (id === "projects" && projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    setActiveSection(id);
  };

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setActiveSection("about");
          } else if (entry.target === skillsRef.current) {
            setActiveSection("skills");
          } else if (entry.target === projectsRef.current) {
            setActiveSection("projects");
          }
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, [handleIntersection]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppContainer>
          <HeaderSection>
            <Header
              scrollToSection={scrollToSection}
              activeSection={activeSection}
            />
          </HeaderSection>
          <MainSection>
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <Footer />
          </MainSection>
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
