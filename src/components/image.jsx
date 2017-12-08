import React from 'react'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  img: {
    width: '100%'
  }
});


const Image = (props) => (
  <div className={props.classes.img}>
    <img src={props.path} alt={props.caption} />
    <small>{props.caption}</small>
  </div>
)

export default withStyles(styles)(Image);