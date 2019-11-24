import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Container, H2, Columns, ProjectCard } from "./../"
import axios from "axios"

export const Projects = () => {
  const [githubData, setGithubData] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    axios
      .get("https://api.github.com/users/richardtaylordawson/repos")
      .then(res => setGithubData(res.data))
      .catch(err => setErrors(err));
  }

  useEffect(() => fetchData(), [])

  return (
    <Container id="projects">
      <H2>Projects</H2>
      <Columns max={4}>
        {
          (githubData.length)
            ?
            githubData.map((projectData, index) => {
              console.log(index)
              return <ProjectCard projectData={projectData} key={index} />
            })
            : ""
        }
      </Columns>
    </Container>
  )
}
