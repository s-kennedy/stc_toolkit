import React from 'react'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  para: {
    fontFamily: "'Gill Sans Infant', 'Helvetica', 'sans-serif'",
    fontSize: '18px',
    lineHeight: '26px',
  }
});


const Paragraph = (props) => (
  <div className={props.classes.para}>
    { props.text }
  </div>
)

export default withStyles(styles)(Paragraph);