import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PDFViewer from "pdf-viewer-reactjs"

const Resume = () => {
  const siteUrl = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  return (
    <PDFViewer
      document={{
        url: `${siteUrl}/RichardTaylorDawson.pdf`
      }}
    />
  )
}

export default Resume
