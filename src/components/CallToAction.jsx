import React from 'react'

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const CallToAction = (props) => {
  return (
    <section className={props.classes}>
      <div style={styles.container} className='container col-xs-12 col-sm-8'>
        { props.children }
      </div>
    </section>
  );
};


export default CallToAction