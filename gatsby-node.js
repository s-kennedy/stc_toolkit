const path = require('path')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `pages`) {
    const nodeContent = JSON.parse(node.internal.content)
    const slug = nodeContent.slug

    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const template = path.resolve('src/templates/about.jsx');

    resolve(
      graphql(
      `{
          allPages {
            edges {
              node {
                internal {
                  content
                }
                fields {
                  slug
                }
                childPagesContent {
                  internal {
                    content
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allPages.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: template,
            layout: 'index',
            context: {
              slug: edge.node.fields.slug,
              metadata: edge.node.internal.content,
              content: edge.node.childPagesContent.internal.content
            },
          })
        })

        return
      })
    )
  })
};
