module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `lapi.gq`,
        short_name: `lapi.gq`,
        start_url: `/`,
        background_color: `#0f2540`,
        theme_color: `#005caf`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout.tsx`),
      },
    },
  ],
}
