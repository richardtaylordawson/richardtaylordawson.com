import React from "react"
import styled from "@emotion/styled"

export const ProjectCard = ({ projectData }) => (
  <Container>
    <Anchor href={projectData.homepageUrl} target="_blank">
      <Name>{projectData.name}</Name>
      <Image src={`${projectData.homepageUrl}/images/social-share.png`} />
      <Description>{projectData.description}</Description>
    </Anchor>
  </Container>
)

const Container = styled.div`
  width: 100%;
  background-color: var(--skillCardBackgroundColor);
  border-radius: 5px;
  margin-bottom: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Anchor = styled.a`
  text-decoration: none;
`

const Name = styled.h3`
  padding: 10px 30px;
  color: var(--primary);
`

const Image = styled.img`
  width: 100%;
`

const Description = styled.div`
  padding: 10px 30px;
  color: var(--text);
  height: 120px;
`
