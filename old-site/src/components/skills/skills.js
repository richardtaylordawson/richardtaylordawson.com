import React from "react"
import { Container, H2, Columns, SkillCard } from "./../"

export const Skills = ({ skillsData }) => (
  <Container id="skills">
    <H2>Skills</H2>
    <Columns lg={5} md={4} sm={2}>
      {
        skillsData.edges
          .sort((a, b) => (b.node.score - a.node.score))
          .map((skillData, index) => <SkillCard skillData={skillData.node} key={index} />)
      }
    </Columns>
  </Container>
)
