import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => {
  console.log('data', data)
  const pageData = JSON.parse(data.pages.internal.content);
  const pageContent = JSON.parse(data.pages.childPagesContent.internal.content);
  return (
    <div>
      <h1>{pageData.title}</h1>
      <p>{pageContent.lead}</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    pages(fields: { slug: { eq: $slug } }) {
      internal {
        content
      }
      childPagesContent {
        internal {
          content
        }
      }
    }
  }
`;