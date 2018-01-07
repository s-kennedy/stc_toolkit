import React from 'react'
import { map } from 'lodash'

import Header from '../components/editable/Header'
import Paragraph from '../components/editable/Paragraph'
import Name from '../components/editable/Name'
import Image from '../components/editable/Image'
import Button from '../components/editable/Button'
import Action from '../components/editable/Action'
import FontAwesome from 'react-fontawesome';

import CallToActionContainer from '../containers/CallToActionContainer';
import SectionContainer from '../containers/SectionContainer';
import ReferenceContainer from '../containers/ReferenceContainer';


const generateContentComponents = (contentJson=[], sectionIndex, onUpdate, onAddContentItem, onDeleteContentItem) => {
  return map(contentJson, (obj, index) => {
    switch (obj.type) {
      case 'section':
      return(
        <SectionContainer
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          addContent={onAddContentItem}
          content={obj.content}
        />);
      case 'call_to_action':
      return (
        <CallToActionContainer
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          addContent={onAddContentItem}
          content={obj.content}
        />);
      case 'reference':
      return (
        <ReferenceContainer
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          addContent={onAddContentItem}
          content={obj.content}
        />);
      case 'header':
      return (
        <Header
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          deleteContent={onDeleteContentItem}
          text={obj.text}
        />);
      case 'paragraph':
      return (
        <Paragraph
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          updateContent={onUpdate}
          deleteContent={onDeleteContentItem}
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
          deleteContent={onDeleteContentItem}
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
          deleteContent={onDeleteContentItem}
        />);
      case 'button':
      return (
        <Button
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          anchor={obj.anchor}
          link={obj.link}
          updateContent={onUpdate}
          deleteContent={onDeleteContentItem}
        />);
      case 'action':
      return (
        <Action
          key={index}
          index={index}
          sectionIndex={sectionIndex}
          text={obj.text}
          updateContent={onUpdate}
          deleteContent={onDeleteContentItem}
        />);
      default:
      console.log('No component defined for ' + obj.type)
      return <div></div>;
    }
  })
}

const EditableInnerContentContainer = (props) => {
  const styles = {
    editActions: {
      display: 'flex',
      justifyContent: 'center'
    },
    actionIcon: {
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
      margin: '5px'
    }
  }

  const handleDuplicate = () => {
    props.onDuplicate(props.sectionIndex)
  }

  const handleDelete = () => {
    props.onDelete(props.sectionIndex)
  }

  const handleAddContentItem = () => {
    props.onAddContentItem(props.sectionIndex, 'paragraph')
  }

  return (
    <div>
      { generateContentComponents(props.content, props.sectionIndex, props.onUpdate, props.onAddContentItem, props.onDeleteContentItem) }
      <div className="edit-actions" style={styles.editActions}>
        {
          props.onDuplicate &&
          <div className='edit-icon' style={styles.actionIcon} onClick={handleDuplicate}>
            <FontAwesome name='clone' />
          </div>
        }
        {
          props.onDelete &&
          <div className='edit-icon' style={styles.actionIcon} onClick={handleDelete}>
            <FontAwesome name='trash' />
          </div>
        }
        {
          props.onAddContentItem &&
          <div className='edit-icon' style={styles.actionIcon} onClick={handleAddContentItem}>
            <FontAwesome name='plus' />
          </div>
        }
      </div>
    </div>
  );
}

export default EditableInnerContentContainer;