module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-toolkit-content",
      options: { resourceType: "pages" }
    }
  ]
};
