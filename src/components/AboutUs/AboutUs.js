import React from 'react';
import styled from 'styled-components';
import Title from '../styles/Title';
import Brochure from '../Brochure/Brochure';


const AboutContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
 position: relative;
 .aboutColumn {
  width: 50%;
  .columnHeader {
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
 }
 .flexCol {
  display: flex;
  flex-direction: column;
  padding-top: 4.3rem;
  padding-left: 5rem;
 }
 
`;

 const AboutUs = ({title}) => {
 return (
  <AboutContainer>
   <Title style={{left: '-190px', top: '150px'}}>{title[1]}</Title>
    <div className='aboutColumn'>
      <div className='columnHeader'>
        We do care!
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div className='aboutColumn'>
    <div className='flexCol'>
      <Brochure />
      <Brochure />
    </div>
    </div>
  </AboutContainer>
 )
}

export default AboutUs;
