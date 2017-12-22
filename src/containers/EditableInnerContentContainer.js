import React from 'react'

import Header from '../components/editable/Header'
import Paragraph from '../components/editable/Paragraph'
import Image from '../components/editable/Image'
import Button from '../components/editable/Button'

import CallToActionContainer from '../containers/CallToActionContainer'
import SectionContainer from '../containers/SectionContainer'


const generateContentComponents = (contentJson, onUpdate) => {
  return contentJson.map((obj, index) => {
    switch (obj.type) {
      case 'section':
      return <SectionContainer key={index} index={index} updateContent={onUpdate} content={obj.content} />
      case 'call_to_action':
      return <CallToActionContainer key={index} index={index} updateContent={onUpdate} content={obj.content}  />
      case 'header':
      return <Header key={index} index={index} text={obj.text} updateContent={onUpdate} />;
      case 'paragraph':
      return <Paragraph key={index} index={index} text={obj.text} updateContent={onUpdate} />;
      case 'image':
      return <Image key={index} index={index} source={obj.source} caption={obj.caption} updateContent={onUpdate} />
      case 'button':
      return <Button key={index} index={index} anchor={obj.anchor} link={obj.link} updateContent={onUpdate} />
    }
  })
}


const EditableInnerContentContainer = (props) => {
  return (
    <div>
      { generateContentComponents(props.content, props.onUpdate) }
    </div>
  );
}

export default EditableInnerContentContainer;