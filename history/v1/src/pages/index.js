import React from "react"
import { graphql } from "gatsby"
import { MainLayout } from "../layouts/mainLayout"
import { Hero, ContactForm, SEO, Projects, Skills } from "../components"

const Index = ({ data }) => (
  <MainLayout>
    <SEO
      title="Front End Developer"
      keywords={[
        "richard taylor dawson",
        "website",
        "portfolio",
        "software",
        "front end developer",
        "engineer",
        "software engineer",
      ]}
    />
    <Hero />
    <Projects projectData={data.githubData} />
    <Skills skillsData={data.allPluralsightSkill} />
    <ContactForm />
  </MainLayout>
)

export const query = graphql`
  query GithubQuery {
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                createdAt
                description
                forkCount
                homepageUrl
                name
                projectsUrl
                url
              }
            }
          }
        }
      }
    }
    allPluralsightSkill {
      edges {
        node {
          code
          type
          title
          score
          level
          percentile
          dateCompleted
          url
          thumbnailUrl
        }
      }
    }
  }
`

export default Index
