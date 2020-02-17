import { graphql, useStaticQuery } from 'gatsby'
// este fichero va a guardar consultas

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          title
          slug
          id
          content
          image {
            fluid(maxWidth: 12000) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  return data.allDatoCmsRoom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    content: room.content,
    image: room.image,
    slug: room.slug,
  }))
}

export default useRooms

// return sin paréntesis, porque los paréntesis son de React, no Gatsby.
// Fragmente no es compatible con Gatsby, solo con React.
//