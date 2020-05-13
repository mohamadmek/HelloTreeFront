import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../styles/Title';
import './Testimonials.css';

const TestimonialsContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
`;

 const Testimonials = ({title}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 return (
  <TestimonialsContainer>
   <Title style={{left: '-210px', top: '150px'}} >{title[2]}</Title>
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
       baba
     </Carousel.Item>
     <Carousel.Item>
     mohamad
     </Carousel.Item>
     <Carousel.Item>
     ali
     </Carousel.Item>
   </Carousel>
  </TestimonialsContainer>
 )
}

export default Testimonials;
