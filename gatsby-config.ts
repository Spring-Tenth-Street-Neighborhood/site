import type { GatsbyConfig } from "gatsby";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

const __dirname = ".";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const config: GatsbyConfig = {
  /**
   * The site is hosted in a subdirectory, https://spring-tenth-street-neighborhood.github.io/site/
   * We need to set the pathPrefix to /site
   */
  pathPrefix: `/site`,
  siteMetadata: {
    title: `Spring Tenth Neighborhood`,
    description: `A site to organize the neighborhood against the 3335 Spring St halfway house proposal`,
    siteUrl: `https://spring-tenth-street-neighborhood.github.io/site/`,
    image: `/icon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
    `gatsby-plugin-provide-react`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-1EXAMPLE", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lettersToTheBoard`,
        path: `${__dirname}/src/spring-st-3335/lettersToTheBoard`,
      },
      __key: "lettersToTheBoard",
    },
  ],
};

export default config;
