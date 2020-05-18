import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../styles/Title';
import Brochure from '../Brochure/Brochure';
import About from './About';
import './AboutUs.css';

const AboutContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
 @media all and (max-width: 769px) {
   margin-top: 400px;
 }
 .aboutColumn {
  width: 50%;
 }
  /* .columnHeader {
   color: ${props => props.theme.white};
   font-weight: bold;
   font-size: 2rem;
   margin-bottom: 2rem;
  }
 }

 .aboutColumn p {
  color: ${props => props.theme.white};
  line-height: 1.4;
 }
 .aboutColumn :nth-child(3) {
  margin-top: 2.5rem;
  max-height: 84px;
  overflow: hidden;
 } */
 .flexCol {
  display: flex;
  flex-direction: column;
  padding-top: 4.3rem;
  padding-left: 5rem;
 }
 @media all and (max-width: 500px) {
   .aboutColumn {
     width: 100%;
   }
   .flexCol {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  text-align: center;
  justify-content: center;
  }
 }
`;

 class AboutUs extends Component {
   constructor(props){
     super(props);
    this.state= {
      brochures: [],
      aboutTexts: [],
    }
   }

    fetchBrochure = async () => {
      const response = await fetch(`http://localhost:8000/api/brochures`);
      const result = await response.json();
      this.setState({brochures: result.brochures});
   }

   fetchAboutTexts = async () => {
    const response = await fetch(`http://localhost:8000/api/abouttexts`);
    const result = await response.json();
    this.setState({aboutTexts: result.abouttexts});
 }

   componentDidMount() {
     this.fetchBrochure();
     this.fetchAboutTexts();
   }

render() {
  return (
    <AboutContainer>
   <Title className='title' style={{left: '-190px', top: '150px'}}>{this.props.title[1]}</Title>
    {this.state.aboutTexts.map((aboutText, index) => {
      if(index < 1) {
        return <About index={aboutText.id} aboutText={aboutText} />
      }else {
        return ''
      }
    })}
    <div className='aboutColumn'>
    <div className='flexCol'>
      {this.state.brochures.map((brochure, index) => {
        if(index < 2){
         return <Brochure 
          brochure={brochure}
          key={brochure.id} />
        } else {
          return ''
        }
      })}
    </div>
    </div>
  </AboutContainer>
 )
}
}

export default AboutUs;
