import React from "react"
import styled from "@emotion/styled"

export const ProjectCard = ({ projectData }) => {
  const name = projectData.name.split("-").map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)} `)

  return (
    <Container>
      <Name>{name}</Name>
      <Image src={`${projectData.homepage}/images/social-share.png`} />
      <Description>{projectData.description}</Description>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  height: 100%;
  margin-bottom: 50px;
`

const Name = styled.h3`
  padding: 10px 30px;
`

const Image = styled.img`
  width: 100%;
`

const Description = styled.div`
  padding: 10px 30px;
`

