module.exports = {
  siteMetadata: {
    title: 'Freecodecamp Hackathon Submission',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'freecodecamp-hackathon-submission',
        short_name: 'starter',
        start_url: '/',
        background_color: '#006400',
        theme_color: '#006400',
        display: 'minimal-ui',
        icon: 'src/images/freecodecamp_logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
