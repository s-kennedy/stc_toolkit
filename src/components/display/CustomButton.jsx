import React from 'react'
import { Button } from 'reactstrap';
import Link from 'gatsby-link';

const CustomButton = (props) => {
  return (
    <Button className="stc-btn">
      <Link to={ props.link }>{ props.anchor }</Link>
    </Button>
  )
}

export default CustomButton;