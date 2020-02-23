import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)

  return data.datoCmsSite.globalSeo
}

export default useSeo
