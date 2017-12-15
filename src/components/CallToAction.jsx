import React from 'react'
import ContentGenerator from '../utils/ContentGenerator';

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const CallToAction = (props) => {
  const contentComponents = ContentGenerator(props.children, props.updateContent);

  return (
    <section className={`call-to-action ${props.classes}`}>
      <div style={styles.container} className='container col-xs-12 col-sm-8'>
        { contentComponents }
      </div>
    </section>
  );
};


export default CallToAction