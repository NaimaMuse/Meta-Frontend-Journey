import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description: "Handy tool belt for Web developers",
    getImageSrc: () => "https://picsum.photos/800/600?random=1",
  },
  {
    title: "React Infinite Scroll",
    description: "A scrollable bottom sheet component for React",
    getImageSrc: () => "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Photo Gallery",
    description: "One-stop shop for modern photo gallery design",
    getImageSrc: () => "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Event Planner",
    description: "A mobile application for event management",
    getImageSrc: () => "https://picsum.photos/800/600?random=4",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkSection
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;