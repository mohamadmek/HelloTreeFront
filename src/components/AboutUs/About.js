import React from 'react'
import styled from 'styled-components';

const AboutColumn = styled.div`
  width: 50%;
  color: ${props => props.theme.white};
  @media all and (max-width: 750px) {
    width: 100%;
  }
  .columnHeader {
   color: ${props => props.theme.white};
   font-weight: bold;
   font-size: 2rem;
   margin-bottom: 2rem;
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
`;

 const About = ({aboutText}) => {
 return (
  
    <AboutColumn>
      <div className='columnHeader'>
        {aboutText.title}
      </div>
      <p>{aboutText.textfirst}</p>
      <p>{aboutText.titlesecond}</p>
    </AboutColumn>
 )
}

export default About;