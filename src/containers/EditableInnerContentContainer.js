import React from 'react'
import { map } from 'lodash'

import Header from '../components/editable/Header'
import Paragraph from '../components/editable/Paragraph'
import Image from '../components/editable/Image'
import Button from '../components/editable/Button'

import CallToActionContainer from '../containers/CallToActionContainer'
import SectionContainer from '../containers/SectionContainer'


const generateContentComponents = (contentJson=[], sectionIndex, onUpdate) => {
  return map(contentJson, (obj, index) => {
    switch (obj.type) {
      case 'section':
      return(
        <SectionContainer
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          content={obj.content}
        />);
      case 'call_to_action':
      return (
        <CallToActionContainer
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          content={obj.content}
        />);
      case 'header':
      return (
        <Header
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          text={obj.text}
        />);
      case 'paragraph':
      return (
        <Paragraph
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          text={obj.text}
        />);
      case 'image':
      return (
        <Image
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          source={obj.source}
          caption={obj.caption}
        />);
      case 'button':
      return (
        <Button
          key={index}
          index={index}
          anchor={obj.anchor}
          link={obj.link}
          updateContent={onUpdate}
        />);
      default:
      console.log('No component defined for ' + obj.type)
      return <div></div>;
    }
  })
}


const EditableInnerContentContainer = (props) => {
  return (
    <div>
      { generateContentComponents(props.content, props.sectionIndex, props.onUpdate) }
    </div>
  );
}

export default EditableInnerContentContainer;