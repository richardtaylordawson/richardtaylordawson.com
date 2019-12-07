import React from "react"
import { Container, H2, Columns, SkillCard } from "./../"

export const Skills = ({ skillsData }) => (
  <Container id="skills">
    <H2>Skills</H2>
    <Columns max={4}>
      {
        skillsData.edges.map((skillData, index) => <SkillCard skillData={skillData.node} key={index} />)
      }
    </Columns>
  </Container>
)
