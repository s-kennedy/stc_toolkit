import React from 'react';
import FontAwesome from 'react-fontawesome';

const styles = {
  editContainer: {
    backgroundColor: 'rgba(0,156,166,0.1)', // teal
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    left: '-15px',
    top: '-15px',
    background: '#009CA6',
    color: 'white',
    height: '30px',
    width: '30px',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
    cursor: 'pointer'
  }

}

const Editable = (props) => {
  return (
    <div className='edit-container' style={styles.editContainer}>
      <div className='edit-icon' style={styles.editIcon} onClick={props.toggleEditing}>
        <FontAwesome name='pencil' />
      </div>
      {props.children}
    </div>
  )
}

export default Editable;