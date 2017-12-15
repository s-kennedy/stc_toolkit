import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import Button from '../components/Button'

function ContentGenerator (contentJson, updateContent) {
  const componentArray = contentJson.map((obj, index) => {
    switch (obj.type) {
      case 'section':
      return <Section key={index} index={index} updateContent={updateContent}>{obj.content}</Section>;
      case 'call_to_action':
      return <CallToAction key={index} index={index} updateContent={updateContent}>{obj.content}</CallToAction>
      case 'header':
      return <Header key={index} index={index} text={obj.text} updateContent={updateContent} />;
      case 'paragraph':
      return <Paragraph key={index} index={index} text={obj.text} updateContent={updateContent} />;
      case 'image':
      return <Image key={index} index={index} source={obj.source} caption={obj.caption} updateContent={updateContent} />
      case 'button':
      return <Button key={index} index={index} anchor={obj.anchor} link={obj.link} updateContent={updateContent} />
    }
  })

  return componentArray;
}

export default ContentGenerator