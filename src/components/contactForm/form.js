import React from "react"
import styled from "@emotion/styled"
import NetlifyForm from "react-netlify-form"
import { Input, Textarea, Button, Label } from ".."

export const Form = () => (
  <NetlifyForm name="Contact Form">
    {({ loading, error, success }) => (
      <div>
        {loading &&
          <div>Loading...</div>
        }
        {error &&
          <div>Your information was not sent. Please try again later.</div>
        }
        {success &&
          <div>Thank you for contacting us!</div>
        }
        {!loading && !success &&
          <Container>
            <Label forTarget="name">Name</Label>
            <Input type="text" name="name" id="name" />
            <Label forTarget="email">Email</Label>
            <Input type="text" name="email" id="email" />
            <Label forTarget="message">Message</Label>
            <Textarea name="message" id="message" />
            <Button>Submit</Button>
          </Container>
        }
      </div>
    )}
  </NetlifyForm>
)

const Container = styled.div`
  padding: 40px;
`
