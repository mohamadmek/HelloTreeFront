import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const CarouselContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
margin-left: 12rem;
/* @media all and (max-width: 700px) {
  margin-top: 0;
} */
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


 const Slide = ({slide}) => {
 return (
  
    <CarouselContainer>
      <div className='carouselImage'>
        <img src={`http://localhost:8000/images/${slide.image}`} alt='carouselImage' />
      </div>
      <div className='carouselText'>
        <div className='carouselTextHeader'>
        {slide.title}
        </div>
        <div className='carouselTextHeaderDef'>
        <p>{slide.description}</p>
        </div>
        <div className='carouselButton'>
          <Button>See More</Button>
        </div>
      </div>
    </CarouselContainer>
  
 )
}

export default Slide;
