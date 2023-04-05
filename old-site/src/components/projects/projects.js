import React from "react"
import { Container, H2, Columns, ProjectCard } from "./../"

export const Projects = ({ projectData }) => {
  const projectsToShow = [
    "calculator",
    "gaming-trivia",
    "snake",
    "easy-as-pie-ui",
    "bruner-dynamics",
    "pwa-shields"
  ]

  return (
    <Container id="projects">
      <H2>Projects</H2>
      <Columns lg={3} md={2} sm={1}>
        {
          projectData.data.user.repositories.edges
            .filter(currentRepo => projectsToShow.includes(currentRepo.node.name))
            .map((singleProject, index) => <ProjectCard projectData={singleProject.node} key={index} />)
        }
      </Columns>
    </Container>
  )
}
