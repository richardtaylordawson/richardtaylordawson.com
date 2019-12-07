import React from "react"
import styled from "@emotion/styled"

export const SkillCard = ({ skillData }) => {
  const verifiedDate = new Date(skillData.dateCompleted)

  return (
    <Container>
      <BorderGradient />
      <Thumbnail src={skillData.thumbnailUrl} />
      <Title>{skillData.title}</Title>
      <SkillLevelScore>{skillData.level} {skillData.score}</SkillLevelScore>
      <Percentile>{Math.round(skillData.percentile)} percentile</Percentile>
      <Verified>VERIFIED {`${verifiedDate.getMonth()}.${verifiedDate.getDay()}.${verifiedDate.getYear()}`}</Verified>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--skillCardBackgroundColor);
  min-width: 170px;
  margin-bottom: 25px;
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const BorderGradient = styled.div`
  background: -webkit-gradient(linear, left bottom, right bottom, color-stop(0%, #FFC200), color-stop(50%, #8BC53F), color-stop(100%, #26C1FB));
  height: 3px;
  width: 100%;
`

const Thumbnail = styled.img`
  width: 100px;
`

const Title = styled.h3`
  color: #bbb;
  font-weight: 400;
  margin: -16px auto 0;
  height: 2.4rem;
`

const SkillLevelScore = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #86Ce21;
  margin-bottom: -10px;
`

const Percentile = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: #888;
  font-weight: 400;
`

const Verified = styled.p`
  border-top: 1px solid #181818;
  padding: 12px 6px;
  color: #888;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
`
