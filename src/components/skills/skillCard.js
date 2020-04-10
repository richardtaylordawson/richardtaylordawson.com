import React from "react"
import styled from "@emotion/styled"
import Green from "./icons/green.svg"
import Blue from "./icons/blue.svg"

export const SkillCard = ({ skillData }) => {
  const verifiedDate = new Date(skillData.dateCompleted)
  const skillDataPercentile = Math.round(skillData.percentile)
  let skillDataIcon
  let skillDataPercentileEnding

  switch(skillData.level) {
    case "Expert":
      skillDataIcon = <img src={Blue} alt="skill bubble icon" />
      break;
    default:
      skillDataIcon = <img src={Green} alt="skill bubble icon" />
      break;
  }

  switch(skillDataPercentile.toString()[1]) {
    case "1":
      skillDataPercentileEnding = "st"
      break;
    case "2":
      skillDataPercentileEnding = "nd"
      break;
    case "3":
      skillDataPercentileEnding = "rd"
      break;
    default:
      skillDataPercentileEnding = "th"
      break;
  }

  return (
    <Container>
      <BorderGradient />
      <Thumbnail src={skillData.thumbnailUrl} />
      <Title>{skillData.title}</Title>
      <SkillLevelScore className={skillData.level.toLowerCase()}>{skillDataIcon} {skillData.level} {skillData.score}</SkillLevelScore>
      <Percentile>{skillDataPercentile}{skillDataPercentileEnding} percentile</Percentile>
      <VerifiedContainer>
        <Verified>VERIFIED {`${verifiedDate.getMonth()}.${verifiedDate.getDay()}.${verifiedDate.getFullYear()}`}</Verified>
      </VerifiedContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--skillCardBackgroundColor);
  min-width: 170px;
  margin-bottom: 25px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Gotham SSm A,Gotham SSm B,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
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
  color: var(--skillCardTitle);
  font-weight: 400;
  margin: -16px auto 0;
  height: 2.4rem;
`

const SkillLevelScore = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: -10px;

  &.expert { color: #26C1FB; }
  &.proficient { color: #86Ce21; }
`

const Percentile = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: #888;
  font-weight: 400;
`

const VerifiedContainer = styled.div`
  border-top: 1px solid #181818;
  padding: 12px 6px;
  width: 100%;
`

const Verified = styled.p`
  color: #888;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  text-align: center;
  margin: 0;
`
