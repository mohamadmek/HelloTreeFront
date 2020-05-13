import React from 'react';
import styled from 'styled-components';
import './Card.css';
 const CardContainer = styled.div`
  display: flex;
  background: ${props => props.theme.white};
  max-width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
 `;

 const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.334%;
  .cardService {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 3rem;
  }
  .icon {
   color: ${props => props.theme.deepRed};
   font-size: 6rem;
  }
  .cardHeader {
   color: ${props => props.theme.cardTextColor};
   text-transform: uppercase;
   max-width: 60%;
   text-align: center;
   font-weight: 500;
   min-height: 36px;
   max-height: 36px;
   overflow: hidden;
  }
  .cardText {
   margin-top: 2rem;
   text-align: center;
   max-width:80%;
   font-size: 1.4rem;
   max-height: 50px;
   overflow: hidden;
  }
 `;

 const Card = () => {
 return (
  <CardContainer>
    <Cards>
     <div className='cardService'>
       <div className='icon'>
        <i className="fas fa-user-shield"></i>
       </div>
       <div className='cardHeader'>
         ppe ( personal protective equipment)
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
        <i class="fas fa-building"></i>
       </div>
       <div className='cardHeader'>
         building material
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
        <i class="far fa-calendar-check"></i>
       </div>
       <div className='cardHeader'>
       miscellaneous
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
    </Cards>

    <Cards className='middleCard'>
     <div className='cardService'>
       <div className='icon'>
       <i class="fas fa-traffic-light"></i>
       </div>
       <div className='cardHeader'>
         traffic safety
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
        <i class="fab fa-accusoft"></i>
       </div>
       <div className='cardHeader'>
         fasteners
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
        <i class="fas fa-screwdriver"></i>
       </div>
       <div className='cardHeader'>
         power tools
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
    </Cards>

    <Cards>
     <div className='cardService'>
       <div className='icon'>
        <i class="fas fa-tools"></i>
       </div>
       <div className='cardHeader'>
       hand tools & consumables
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
       <i class="fas fa-paint-roller"></i>
       </div>
       <div className='cardHeader'>
         construction equipment
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
     <div className='cardService'>
       <div className='icon'>
        <i class="fas fa-bolt"></i>
       </div>
       <div className='cardHeader'>
         tower light & generators
       </div>
       <div className='cardText'>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qu
       </div>
     </div>
    </Cards>

  </CardContainer>
 )
}

export default Card;
