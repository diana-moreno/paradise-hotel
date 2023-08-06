module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // npm i @emotion/core @emotion/styled gatsby-plugin-emotion
    // conecta emotion con gatsby, es para añadir el css en styles component
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      // plugin que permite leer las imágenes que se encuentran en la carpeta src/images
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
        icon: `src/images/8.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-datocms", // pluggin para acceder a la API de CMS DatoCMS
      options: {
        apiToken: "2717002b9bdd44e5727323424df228", // colocar el token de datoCMS. Read only-API.
      },
    },
  ],
}
