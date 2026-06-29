import React from "react"
import { MainLayout } from "../layouts/mainLayout"
import { Hero, ContactForm, SEO, Projects, Skills } from "../components"
import { projectsData, skillsData } from "../data/siteData"

const Index = () => (
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
    <Projects projectData={projectsData} />
    <Skills skillsData={skillsData} />
    <ContactForm />
  </MainLayout>
)

export default Index
