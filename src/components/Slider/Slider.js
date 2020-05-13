import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import safety from '../../static/images/safety.png'
import './Slider.css';
import Title from '../styles/Title';


const CarouselContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
margin-left: 12rem;
.carouselImage {
  width: 40%;
  margin-left: 3rem;
}
.carouselText {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3rem;
}
.carouselImage > img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
.carouselTextHeader  {
  color: ${props => props.theme.white};
  font-size: 4rem;
  font-weight: bold;
  max-width: 60%;
  line-height: 1;
}
.carouselTextHeaderDef p {
  color: ${props => props.theme.white};
  font-size: 1.1rem;
  max-width: 60%;
  margin-top: 1.5rem;
}
.carouselButton {
  max-width: 60%;
  text-align: right;
}
`;

const Button = styled.button`
  background: ${props => props.theme.white};
  color: ${props => props.theme.deepRed};
  padding: 7px 20px;
  border-radius: 3px;
  font-size: 1.1rem;
`;

 const Slider = ({title}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 return(
   <>
   
   <Title>{title[0]}</Title>
   <Carousel 
    activeIndex={index}
    onSelect={handleSelect}
    nextIcon={false}
    prevIcon={false}
    touch={true} 
    wrap={true}
    style={{height: '400px'}}
    >
  <Carousel.Item>
    <CarouselContainer>
      <div className='carouselImage'>
        <img src={safety} alt='carouselImage' />
      </div>
      <div className='carouselText'>
        <div className='carouselTextHeader'>
        Personal Protective Equipment
        </div>
        <div className='carouselTextHeaderDef'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
        </div>
        <div className='carouselButton'>
          <Button>See More</Button>
        </div>
      </div>
    </CarouselContainer>
  </Carousel.Item>
  <Carousel.Item>
  <CarouselContainer>
      <div className='carouselImage'>
        <img src={safety} alt='carouselImage' />
      </div>
      <div className='carouselText'>
        <div className='carouselTextHeader'>
        Personal Protective Equipment
        </div>
        <div className='carouselTextHeaderDef'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
        </div>
        <div className='carouselButton'>
          <Button>See More</Button>
        </div>
      </div>
    </CarouselContainer>
  </Carousel.Item>
  <Carousel.Item>
  <CarouselContainer>
      <div className='carouselImage'>
        <img src={safety} alt='carouselImage' />
      </div>
      <div className='carouselText'>
        <div className='carouselTextHeader'>
        Personal Protective Equipment
        </div>
        <div className='carouselTextHeaderDef'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
        </div>
        <div className='carouselButton'>
          <Button>See More</Button>
        </div>
      </div>
    </CarouselContainer>
  </Carousel.Item>
</Carousel>
</>
 );
 };
 

export default Slider;
