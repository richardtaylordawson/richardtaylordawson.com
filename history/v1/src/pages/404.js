import React from "react"
import styled from "@emotion/styled"
import { MainLayout } from "../layouts/mainLayout"
import { H1, P, Container, SEO } from "../components"

const NotFound = () => (
  <MainLayout>
    <SEO title="Not Found" />
    <Wrapper>
      <Container>
        <H1>NOT FOUND</H1>
        <P>Unfortunately that's not a page...</P>
      </Container>
    </Wrapper>
  </MainLayout>
)

const Wrapper = styled.div`
  height: calc(100vh - 120px);
`

export default NotFound
