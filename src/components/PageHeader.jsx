import React from 'react';
import DisplayTitle from '../components/DisplayTitle'
import { Jumbotron } from 'reactstrap';


const PageHeader = (props) => {
  const styles = {
    jumbotron: {
      display: 'flex',
      background: 'url(https://www.savethechildren.org.uk/content/dam/global/images/countries/syria/rescue-at-sea-vos-sc127177-orig.jpg.thumbimage.1536.1536.jpg) no-repeat center center',
      backgroundSize: 'cover',
      height: '60vh',
      minHeight: '440px',
      alignItems: 'center'
    }
  }

  return (
    <Jumbotron style={styles.jumbotron}>
      <DisplayTitle text={props.title} updateTitle={props.onUpdateTitle} />
    </Jumbotron>
  )
}

export default PageHeader