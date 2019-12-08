import React from "react"
import styled from "@emotion/styled"
import { Form, Container, Columns, H2, H3, P } from "./../"
import { Breakpoints } from "./../utils/"
import messageManImg from "./../../images/message-man.svg"

export const ContactForm = () => (
  <Container id="contact">
    <H2>Contact</H2>
    <Columns>
      <div>
        <H3>Want to get in touch?</H3>
        <P>I’d love to hear from you whether you just want to connect, say hi, or discuss a potential project.</P>
        <P>I will get to you as soon as I can <span role="img" aria-label="call me hand emoji">🤙</span></P>
        <ImageContainer>
          <img src={messageManImg} alt="man standing next to mail" />
        </ImageContainer>
      </div>
      <Form />
    </Columns>
  </Container>
)

const ImageContainer = styled.div`
  width: 70%;
  margin: auto;
  img { width: 400px; }

  ${Breakpoints["medium-down"]} { display: none; }
`
