require('dotenv').config();

module.exports = {
  pathPrefix: '/gatsby-hagta-web',
  siteMetadata: {
    title: `Hagta`,
    description: `Website Hagta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
        options: {
          apiToken: `4a741297ffdeb332e21006322dfa26`,
          // Preview the latest version of records instead of the published one
          previewMode: false,
          // Disable automatic reloading of content when some change occurs on DatoCMS:
          disableLiveReload: false,
          apiUrl: 'https://site-api.datocms.com'
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
