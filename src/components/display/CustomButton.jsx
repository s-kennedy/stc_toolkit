import React from 'react'
import { Button } from 'reactstrap';
import Link from 'gatsby-link';

const styles = {
  button: {
    cursor: 'pointer'
  }
}

const CustomButton = (props) => {
  return (
    <Button className="stc-btn" style={styles.button}>
      <Link to={ props.link }>{ props.anchor }</Link>
    </Button>
  )
}

export default CustomButton;