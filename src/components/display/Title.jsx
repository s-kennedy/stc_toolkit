import React from 'react'

const styles = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem',
  },
  title: {
    borderBottom: '2px solid #DA291C'
  }
}

const Title = (props) => {
  return (
    <div className='title-container' style={styles.titleContainer}>
      <div className='title edit-container' style={styles.title}>
        <h2>{ props.text }</h2>
      </div>
    </div>
  )
}

export default Title;