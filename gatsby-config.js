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
            variants: [`400`, `600`, `700`]
          },
        ],
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
