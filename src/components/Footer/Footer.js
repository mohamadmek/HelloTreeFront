import React from 'react'
import styled from 'styled-components';
import Line from '../Line/Line';
import Map from '../Map/Map'

const FooterContainer = styled.div`
  background: ${props => props.theme.blackGrey};
  padding-bottom: 15px;
  .footerMiniContainer {
   display: flex;
   max-width: 70%;
   margin: 0 auto;
   flex-wrap: wrap;
   justify-content: space-between;
  }
  .footerColumn {
   width: 25%;
   padding: 0 20px;
  }
  @media all and (max-width: 1000px) {
    .footerColumn {
   width: 50%;
   padding: 0 20px;
  }
    .m_quick {
      margin-top: 30px;
    }
  }
  @media all and (max-width: 600px) {
    .footerColumn {
   width: 100%;
   padding: 0 20px;
  }
    .m_quick {
      margin-top: 50px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .m_m_quick{
      margin-top: 280px;
    }
  }
  .footerColumnTitle {
   color: ${props => props.theme.white};
   text-transform: uppercase;
   margin-bottom: 2rem;
  }
  p {
   color: ${props => props.theme.lightGrey};
   max-width: 82%;
  }
  .phoneNumbers {
   margin: 1rem 0;
  }
  .footerEmail {
   color: ${props => props.theme.white};
  }
  .footerDirections {
   color: ${props => props.theme.white};
  }
  .rightArrow {
   color: ${props => props.theme.lightGrey};
  }
  .footerSocial {
   display: flex;
   justify-content: space-between;
   max-width: 67%;
   margin-top: 2rem;
  }
  .footerSocial span {
   color: ${props => props.theme.white};
   font-size: 2rem;
   cursor: pointer;
  }
  .footerSocial span:hover {
   color: ${props => props.theme.deepRed};
    transform:scale(1.3);
    animation: all 5s ease-in-out;
  }
  .footerMap {
   position: relative;
  }
  .quickLink {
   color: ${props => props.theme.white};
   margin-top: 2rem;
  }
  input {
   background: ${props => props.theme.lightGrey};
   color: ${props => props.theme.lightGrey};
   border: none;
   padding: 3px;
   border-radius: 3px;
   color: black;
   font-weight: bold;
  }
  textarea {
    background: ${props => props.theme.lightGrey};
    color: ${props => props.theme.lightGrey};
    color: black;
   font-weight: bold;
   border-radius: 3px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .send {
    background: transparent;
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 3px;
    color: white;
  }
`;

const LastFooter = styled.div`
  background: white;
  padding: 20px 0;
  .flexi {
    max-width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;
    span {
      color: ${props => props.theme.deepRed};
    }
  }

`;

 const Footer = () => {
 return (
   <>
  <FooterContainer>
    <div className='footerMiniContainer' > 
    <Line style={{marginBottom: '-42rem'}} />
     <div className='footerColumn'>
       <div className='footerColumnTitle'>contact us</div>
       <p>Al Mirqab Al Jadeed Street 
        P.O. Box: 32048, Doha, Qatar</p>
        <p className='phoneNumbers'>T: +961 111 111 <br />
           F: +961 111 111 </p>
        <p>E-mail: <span className='footerEmail'>support@hellotree.com</span></p>
        <div className='footerDirections'>Get directions on the map <span className='rightArrow'><i className="fas fa-long-arrow-alt-right"></i></span></div>
        <div className='footerSocial'>
         <span><i className="fab fa-facebook-f"></i></span>
         <span><i className="fab fa-twitter"></i></span>
         <span><i className="fab fa-instagram"></i></span>
         <span><i className="fab fa-whatsapp"></i></span>
        </div>
     </div>

     <div className='footerColumn m_quick'>
       <div className='footerMap'>
        <Map />
       </div>
     </div>

     <div className='footerColumn m_quick m_m_quick'>
       <div className='footerColumnTitle'>quick links</div>
       <div className='quickLink'>.PPE Personal Protective Equipments</div>
       <div className='quickLink'>. Power Tools Professional & Personal</div>
       <div className='quickLink'>.Building Materials & Masonry</div>
       <div className='quickLink'>.Machineries & Generators</div>
     </div>

     <div className='footerColumn m_quick'>
       <div className='footerColumnTitle'>get a free quote</div>
       <form>
        <label htmlFor='name'>
          <input type='text' name='text' placeholder='Name' />
        </label>
        <label htmlFor='subject'>
          <input className='mt-15' type='text' name='subject' placeholder='Subject' />
        </label>
        <textarea className='mt-15' placeholder='Describe in detail' >

        </textarea>
        <button className='send'>SEND</button>
       </form>
     </div>
    </div>
  </FooterContainer>
  <LastFooter>
    <div className='flexi'>
      <div className='copyright'>© 2019    <span>Designed & Developed by Hellotree</span></div>
    </div>
  </LastFooter>
  </>
 )
}

export default Footer;
