require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby + MicroCMS`,
    description: `Create site by gatsby and MicroCMS.`,
    author: `warlock`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: `${process.env.MICROCMS_API_KEY}`,
        serviceId: `${process.env.MICROCMS_SERVICE_ID}`,
        endpoint: 'post',
        type: 'post',
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: `${process.env.MICROCMS_API_KEY}`,
        serviceId: `${process.env.MICROCMS_SERVICE_ID}`,
        endpoint: 'fix-page',
        type: 'fix-page',
      }
    }
  ],
}
