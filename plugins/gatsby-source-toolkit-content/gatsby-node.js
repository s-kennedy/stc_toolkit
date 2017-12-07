const axios = require(`axios`)
const crypto = require(`crypto`)

exports.sourceNodes = ({ boundActionCreators }, { resourceType }) => {
  const { createNode } = boundActionCreators
  const url = `http://localhost:3000/${resourceType}`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        const resources = response.data;
        resources.map((resource) => {
          const node = {
            id: `${resourceType}-${resource.id}`,
            parent: null,
            children: [],
            internal: {
              type: `${resourceType}`,
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(resource))
                .digest(`hex`),
              mediaType: `application/json`,
              content: JSON.stringify(resource),
            }
          };

          createNode(node)
        })
        resolve()
      })
      .catch(function (error) {
        console.log(error);
        process.exit(1)
        reject()
      });
  })
}

