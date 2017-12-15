import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Button } from 'reactstrap';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';

const para1 = "The purpose of this toolkit is to present practical guidance to help project teams ensure that PA programmes are child-sensitive (i.e. maximize benefits for children and eliminate harm to children). This involves using child-sensitive approaches in the design, implementation, monitoring and/or evaluation phases of PA projects whenever possible."

const para2 = "Additionally, this toolkit leverages Save the Children’s expertise, knowledge, skills and experience in designing and implementing PA programming (e.g. food security and hunger, livelihoods, social protection, humanitarian cash/resource transfers) that is child-sensitive by consolidating and presenting relevant tools and resources that already exist."

const para3 = "This toolkit uses the example of a real Save the Children PA project in Kenya. This example is a practical case study that uses the real facts and details of this project to show the utility of the various building blocks, action steps and tools presented in this toolkit. Where necessary (i.e. where the information was not available or where necessary to ensure the toolkit’s clarity) some additional information has been added to the Kenya Case Study."

const IndexPage = (props) => {
  return (
    <div className='home'>
      <Jumbotron>
        <div className='headline-holder'>
          <h1 className="display-3">Child Sensitivity in Poverty Alleviation Toolkit</h1>
        </div>
        <p className="lead">Here we need a tagline for the toolkit.</p>
      </Jumbotron>

      <Section>
        <div className='col-xs-12 col-sm-6'>
          <Header text='Why we made this' />
        </div>
        <div className='col-xs-12 col-sm-6'>
          <p>{para1}</p>
        </div>
      </Section>

      <Section>
        <div className='col-xs-12 col-sm-6'>
          <Header text='The Toolkit' />
        </div>
        <div className='col-xs-12 col-sm-6'>
          <p>{para2}</p>
        </div>
      </Section>

      <Section>
        <div className='col-xs-12 col-sm-6'>
          <Header text='The Case Study' />
        </div>
        <div className='col-xs-12 col-sm-6'>
          <p>{para3}</p>
        </div>
      </Section>

       <Section centered>
        <div className='text'>
          <p className='large'>Get started now!</p>
        </div>
        <div className='button'>
          <Button>Get started</Button>
        </div>
      </Section>
    </div>
  );
};


export default IndexPage