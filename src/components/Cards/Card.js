import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
 const CardContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  @media all and (max-width: 840px) {
    display: none;
    max-width: 80%;
  }
  .firstAnimation {
    animation: fadeIn 0.5s linear;
    @keyframes fadeIn {
      from { opacity: 0 }
      to { opacity: 1 }
    }
  }
 `;
  
 const Cards = styled.div`
 background: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  @media all and (max-width: 840px) {
    flex-direction: row;
    width: 100%;
    border-radius: 10px;
    padding-bottom: 2rem;
  }
  @media all and (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
  }
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

const CardSlider = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: none;
  @media all and (max-width: 840px) {
    display: block;
  }
`;

 const Card = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 return (
   <>
  <CardContainer>
    <Cards className='firstAnimation'>
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

    <Cards className='firstAnimation'>
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

  <CardSlider>
    <Carousel 
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={false}
      prevIcon={false}
      touch={true} 
      wrap={true}
      style={{height: '300px'}}
      bsPrefix= "myNewCardCarousel carousel"
      >
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
  </CardSlider>
  </>
 )
}

export default Card;
