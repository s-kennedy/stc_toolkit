import React from 'react'

const styles = {
  header: {
    display: 'flex'
  },
  h3: {
    borderBottom: '2px solid #DA201C', //red
    paddingBottom: '0.6rem'
  }
}

const Header = (props) => {
  return (
    <div className='header' style={styles.header}>
      <div className="edit-container">
        <h3 style={styles.h3}>{ props.text }</h3>
      </div>
    </div>
  )
}

export default Header;