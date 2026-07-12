module.exports = {
  siteMetadata: {
    title: `Richard Taylor Dawson`,
    twitterHandle: `@richard_codes`,
    description: `My personal website & resume showcasing my experience and projects. Built using GatsbyJS, React and other open source tools & API's.`,
    siteUrl: `https://v1.richardtaylordawson.com`
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
        icon: `src/images/logo.png`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://v1.richardtaylordawson.com',
        sitemap: 'https://v1.richardtaylordawson.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', }]
      }
    },
  ],
}
