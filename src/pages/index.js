import React from "react"
import { graphql } from "gatsby"
import { MainLayout } from "../layouts/mainLayout"
import { Hero, ContactForm, SEO, Projects } from "./../components/"

const Index = ({ data }) => (
  <MainLayout>
    <SEO
      title="Front End Developer"
      keywords={["richard taylor dawson", "website", "portfolio", "software", "front end developer", "engineer", "software engineer"]}
    />
    <Hero />
    <Projects projectData={data} />
    <ContactForm />
  </MainLayout>
)

export const query = graphql`
  query MyQuery {
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
  }
`

export default Index
