import React from 'react'
import { map } from 'lodash'

import Header from '../components/editable/Header'
import Paragraph from '../components/editable/Paragraph'
import Name from '../components/editable/Name'
import Image from '../components/editable/Image'
import Button from '../components/editable/Button'
import FontAwesome from 'react-fontawesome';

import CallToActionContainer from '../containers/CallToActionContainer'
import SectionContainer from '../containers/SectionContainer'
import ReferenceContainer from '../containers/ReferenceContainer'


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
      case 'reference':
      return (
        <ReferenceContainer
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
      case 'name':
      return (
        <Name
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
  const styles = {
    editIcon: {
      position: 'absolute',
      background: '#9A3324', // plum
      color: 'white',
      height: '30px',
      width: '30px',
      borderRadius: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1',
      cursor: 'pointer',
      bottom: '-5px',
      left: '50%',
      transform: 'translateX(-20px)',
    }
  }

  const handleDuplicate = () => {
    props.onDuplicate(props.sectionIndex)
  }

  return (
    <div>
      { generateContentComponents(props.content, props.sectionIndex, props.onUpdate) }
      {
        props.onDuplicate &&
        <div className='edit-icon' style={styles.editIcon} onClick={handleDuplicate}>
          <FontAwesome name='plus' />
        </div>
      }
    </div>
  );
}

export default EditableInnerContentContainer;