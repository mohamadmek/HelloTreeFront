import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
  background: ${props => props.theme.blackGrey};
`;

 const Footer = () => {
 return (
  <FooterContainer>
    <div className='footerMiniContainer'> 
     <div className='footerColumn'>
       <div className='footerColumnTitle'>contact us</div>
       <p>Al Mirqab Al Jadeed Street 
        P.O. Box: 32048, Doha, Qatar</p>
        <p>T: +961 111 111 <br />
           F: +961 111 111 </p>
     </div>
    </div>
  </FooterContainer>
 )
}

export default Footer;
