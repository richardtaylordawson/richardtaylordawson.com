const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Richard Taylor Dawson`,
    twitterHandle: `@richard_codes`,
    description: `My personal website & resume showcasing my experience and projects. Built using GatsbyJS, React and other open source tools & API's.`,
    siteUrl: `https://richarddawson.codes`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Richard Taylor Dawson`,
        short_name: `Richard Taylor Dawson`,
        start_url: `/`,
        background_color: `#18a0fb`,
        theme_color: `#18a0fb`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
          query {
            user(login: "richardtaylordawson") {
              repositories(first: 100, affiliations:[OWNER], ownerAffiliations:[OWNER], orderBy: {field: UPDATED_AT, direction: DESC}) {
                edges {
                  node {
                    name
                    description
                    url
                    createdAt
                    forkCount
                    homepageUrl
                    projectsUrl
                    updatedAt
                  }
                }
              }
            }
          }
        `
      }
    },
    {
      resolve: 'gatsby-source-pluralsight',
      options: {
        username: 'richard-dawson-80'
      }
    },
    {
      resolve: `gatsby-source-trello-board`,
      options: {
        key: `81423bc469470a30a91501d52fabae4f`,
        token: `c11f678a79ec4e6a7c6e72c5642e15484c15fa7f310ff67bc5a1c1e609cb4fef`,
        board_id: `5d850d4d16b4a00b01116938`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142412414-7',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://richarddawson.codes',
        sitemap: 'https://richarddawson.codes/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', }]
      }
    },
  ],
}
