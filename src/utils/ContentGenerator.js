import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'

function ContentGenerator (contentJson, updateContent) {
  const componentArray = contentJson.map((obj, index) => {
    switch (obj.contentType) {
      case 'header':
      return <Header key={index} index={index} text={obj.text} updateContent={updateContent} />;
      case 'paragraph':
      return <Paragraph key={index} index={index} text={obj.text} updateContent={updateContent} />;
      case 'image':
      return <Image key={index} index={index} path={obj.path} caption={obj.caption} />
    }
  })

  return componentArray;
}

export default ContentGenerator