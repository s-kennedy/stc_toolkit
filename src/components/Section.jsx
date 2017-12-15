import React from 'react'
import ContentGenerator from '../utils/ContentGenerator';

const centeredStyles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem'
  }
}

const styles = {
  container: {
    display: 'flex',
    padding: '3rem',
  },
  column: {
    flex: '1 1 50%',
  }
}

const Section = (props) => {
  const contentComponents = ContentGenerator(props.children, props.updateContent);

  return (
    <section className={props.classes}>
      <div style={props.centered ? centeredStyles.container : styles.container} className='container col-xs-12 col-sm-8'>
          { contentComponents }
      </div>
    </section>
  );
};


export default Section