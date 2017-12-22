import React from 'react'

const styles = {
  title: {
    margin: 0
  },
  headlineHolder: {
    backgroundColor: '#FFFFFF',
    padding: '2px 20px',
    borderRadius: '8px'
  }
}

const TitleWithHolder = (props) => {
  return (
    <div className='display-title edit-container'>
      <h1 className="display-3" style={styles.title}>
        <span className="headline-holder" style={styles.headlineHolder}>{ props.text }</span>
      </h1>
    </div>
  )
}

export default TitleWithHolder;