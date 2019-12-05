import React from "react"
import { Container, H2, Columns, ProjectCard } from "./../"

export const Projects = ({ projectData }) => {
  const projectsToShow = [
    "calculator",
    "gaming-trivia",
    "snake",
    "easy-as-pie-ui",
    "bruner-dynamics"
  ]

  return (
    <Container id="projects">
      <H2>Projects</H2>
      <Columns max={3}>
        {
          projectData.githubData.data.user.repositories.edges
            .filter(currentRepo => projectsToShow.includes(currentRepo.node.name))
            .map((singleProject, index) => <ProjectCard projectData={singleProject.node} key={index} />)
        }
      </Columns>
    </Container>
  )
}
