import React from "react"
import { MainLayout } from "../layouts/mainLayout"
import { Hero, ContactForm, SEO } from "./../components/"

const Index = () => (
  <MainLayout>
    <SEO
      title="Front End Developer"
      keywords={["richard taylor dawson", "website", "portfolio", "software", "front end developer", "engineer", "software engineer"]}
    />
    <Hero />
    {/* <Projects /> */}
    <ContactForm />
  </MainLayout>
)

export default Index
