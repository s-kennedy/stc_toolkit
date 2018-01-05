const axios = require(`axios`);
const crypto = require(`crypto`);

exports.sourceNodes = ({ boundActionCreators }, { resourceType }) => {
  const { createNode } = boundActionCreators;
  const url = `http://localhost:3000/${resourceType}`;

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        const resources = response.data;

        resources.map((resource) => {
          const parentNodeId = `${resourceType}-${resource.id}`
          const contentNodeId = `${resourceType}-${resource.id}-content`
          const parentNodeContent = {
            id: resource.id,
            title: resource.title,
            slug: resource.slug,
            template: resource.template,
            category: resource.page_type
          }
          const contentNodeContent = {
            header: resource.page_header,
            body: resource.content
          }

          const parentNode = {
            id: parentNodeId,
            parent: null,
            children: [contentNodeId],
            internal: {
              type: `${resourceType}`,
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(parentNodeContent))
                .digest(`hex`),
              mediaType: `application/json`,
              content: JSON.stringify(parentNodeContent)
            }
          };

          const contentNode = {
            id: contentNodeId,
            parent: parentNodeId,
            children: [],
            internal: {
              type: `${resourceType}_content`,
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(contentNodeContent))
                .digest(`hex`),
              mediaType: `application/json`,
              content: JSON.stringify(contentNodeContent)
            }
          }

          createNode(parentNode);
          createNode(contentNode);
        })
        resolve()
      })
      .catch(function (error) {
        console.log(error);
        process.exit(1)
        reject()
      });
  })
};


