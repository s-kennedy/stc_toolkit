import React from 'react';
import Link from 'gatsby-link';
import update from 'immutability-helper';

import DisplayTitle from '../components/DisplayTitle'
import ContentGenerator from '../utils/ContentGenerator';

import { savePage } from '../utils/API';
import { auth } from '../utils/init';


const PageContent = (props) => {
  const contentComponents = ContentGenerator(props.content, props.onUpdatePageContent);
    return (
      <div className='home'>
        { contentComponents }
      </div>
    )
}

export default PageContent;