import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Favicon from "../../images/logo.png"

export const SEO = ({ title, keywords = [], meta = [], pathname = `/` }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterHandle
            description
            siteUrl
          }
        }
      }
    `
  )

  const pageTitle = `Richard Taylor Dawson | ${
    title || site.siteMetadata.title
  }`
  const canonicalUrl = new URL(pathname, site.siteMetadata.siteUrl).href

  return (
    <Helmet
      link={[
        { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
        { rel: "canonical", href: canonicalUrl },
      ]}
      title={`${pageTitle}`}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: `google-site-verification`,
          content: `8xVt6B5nYoIzSXiJEU_R3lmGrtnsyPvT6EDqmVQ9wsw`,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:site_name`,
          content: pageTitle,
        },
        {
          itemprop: `name`,
          content: pageTitle,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:text:title`,
          content: pageTitle,
        },
        {
          name: `twitter:image:alt`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          itemprop: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/images/social-share.png`,
        },
        {
          itemprop: `image`,
          content: `${site.siteMetadata.siteUrl}/images/social-share.png`,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}/images/social-share.png`,
        },
        {
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          property: `og:image:width`,
          content: `640`,
        },
        {
          property: `og:image:height`,
          content: `320`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterHandle,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterHandle,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  meta: PropTypes.array,
  pathname: PropTypes.string,
}
