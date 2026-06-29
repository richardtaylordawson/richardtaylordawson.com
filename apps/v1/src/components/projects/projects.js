import React from "react"
import { Container, H2, Columns, ProjectCard } from ".."

export const Projects = ({ projectData }) => {
  return (
    <Container id="projects">
      <H2>Projects</H2>
      <Columns lg={3} md={2} sm={1}>
        {projectData.map((singleProject, index) => (
          <ProjectCard projectData={singleProject} key={index} />
        ))}
      </Columns>
    </Container>
  )
}
