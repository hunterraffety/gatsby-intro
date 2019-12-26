module.exports = {
  siteMetadata: {
    title: 'Crafts by Carolyn',
    description:
      "The online boutique for Carolyn Raffety's crafts and knick-knacks",
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
  ],
}
