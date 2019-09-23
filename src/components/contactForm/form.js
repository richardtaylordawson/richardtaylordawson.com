import React from "react"
import styled from "@emotion/styled"
import NetlifyForm from "react-netlify-form"
import { Input, Textarea, Button, Label, H3 } from "./../"
import { Breakpoints } from "./../utils/"

export const Form = () => (
  <NetlifyForm name="Contact Form" honeypotName="sorry-mr-bot">
    {({ loading, error, success }) => (
      <div>
        {loading &&
          <ContainerAlt>
            <H3>Loading...</H3>
          </ContainerAlt>
        }
        {error &&
          <ContainerAlt>
            <H3>Your information was not sent. Please try again later.</H3>
          </ContainerAlt>
        }
        {success &&
          <ContainerAlt>
            <H3>Thank you for contacting me! I'll be in touch soon.</H3>
          </ContainerAlt>
        }
        {!loading && !success &&
          <Container>
            <Label forTarget="name">Name</Label>
            <Input type="text" name="name" id="name" />
            <Label forTarget="email">Email</Label>
            <Input type="text" name="email" id="email" />
            <Label forTarget="message">Message</Label>
            <Textarea name="message" id="message" />
            <Button button={true} fullWidth={true}>Submit</Button>
          </Container>
        }
      </div>
    )}
  </NetlifyForm>
)

const Container = styled.div`
  ${Breakpoints["large-up"]} { padding: 40px; }
`

const ContainerAlt = styled.div`
  text-align: center;

  ${Breakpoints["large-up"]} { padding: 40px; }
`
