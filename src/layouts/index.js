import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from './navigation'

import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Child Sensitivity in Poverty Alleviation Programming: An Analytical Toolkit"
      meta={[
        { name: 'description', content: 'Child Sensitivity in Poverty Alleviation Programming: An Analytical Toolkit' },
        { name: 'keywords', content: 'children, Save the Children, poverty alleviation, poverty reduction, child sensitivity, toolkit' },
      ]}
    />
    <Navigation />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
