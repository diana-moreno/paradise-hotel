exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  // console.log(result.data.allDatoCmsroom.nodes);

  if (result.errors) {
    reporter.panic("No results.", result.errors)
  }

  // Si hay paginas, crear los archivos
  const rooms = result.data.allDatoCmsRoom.nodes

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/templates/rooms.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
