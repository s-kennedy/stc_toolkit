import React from 'react'

const styles = {
  name: {
    fontWeight: 'bold'
  }
}
const Action = (props) => {
  return (
    <p style={styles.name}>{ props.text }</p>
  )
}

export default Action;