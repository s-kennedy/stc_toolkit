import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import NavigationContainer from '../containers/NavigationContainer';
import { auth } from '../utils/init';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../assets/sass/custom.scss';


export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: auth.loggedIn(),
    };
  }

  render() {
    return(
      <div>
        <Helmet
          title="Child Sensitivity in Poverty Alleviation Programming: An Analytical Toolkit"
          meta={[
            { name: 'description', content: 'Child Sensitivity in Poverty Alleviation Programming: An Analytical Toolkit' },
            { name: 'keywords', content: 'children, Save the Children, poverty alleviation, poverty reduction, child sensitivity, toolkit' },
            { name: 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-touch-fullscreen', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
          ]}
        />
        <NavigationContainer />
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

