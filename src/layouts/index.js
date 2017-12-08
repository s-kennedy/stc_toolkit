import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './index.css'

const toolkitTheme = createMuiTheme({
  palette: {
    red: '#DA29IC',
    plum: '#9A3324',
    mustard: '#F2A900',
    black: '#22222I',
    teal: '#009CA6',
    lightGrey: '#999999',
    darkGrey: '#4A4F53',
    biscuit: '#DICCBD',
    lightBiscuit: '#F3F2EE'
  },
  typography: {
    fontFamily: "'Gill Sans Infant', 'Helvetica', 'sans-serif'",
    fontSize: '18px',
    lineHeight: '26px',
    title: {
      fontFamily: "'Trade Gothic', 'Helvetica', 'sans-serif'",
      fontSize: '3.33rem',
      lineHeight: '2.077rem'
    },
    subheading: {
      fontFamily: "'Trade Gothic', 'Helvetica', 'sans-serif'",
      fontSize: '2.22rem',
      lineHeight: '1.69rem'
    },
  }
})


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
