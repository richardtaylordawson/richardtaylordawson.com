import React from "react"
import { MainLayout } from "../layouts/mainLayout"
import { Hero, ContactForm } from "./../components/"

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <ContactForm />
  </MainLayout>
)

export default IndexPage
