import React from 'react'
import styled from 'styled-components';


const TestimonialFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .testimonialColumn {
    width: 50%;
    color: ${props => props.theme.white};
  }
  .testimonialTitle {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }
  .testimonialQuote {
    font-size: 2rem;
    margin: 2rem 0;
  }
  .testimonialName {
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  
  .testimonialText {
    text-align: justify;
  }
  .testimonialColumn img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  @media all and (max-width: 878px) {
    .testimonialColumn img {
      /* position: absolute;
      top: 70px;
      right: 70px;
      z-index:1000;
      width: 70px;
      height: 70px; */
      width: 130px;
      height: 130px;
      
  }
    .testimonialColumn {
      width: 100%;
    }
  }
`;

const Testimonial = ({testimonial}) => {
 return (
  <TestimonialFlex>
        <div className='testimonialColumn'>
          <div className='testimonialTitle'>
            testimonials
          </div>
          <div className='testimonialQuote'>
           {testimonial.quote}
          </div>
          <div className='testimonialName'>- {testimonial.name}</div>
          <div className='testimonialText'>
            <p>
            {testimonial.text}
            </p>
          </div>
        </div>
        <div className='testimonialColumn' style={{textAlign: 'right'}}>
          <img src={`http://localhost:8000/storage/images/${testimonial.image}`} alt='testimonial' />
        </div>
      </TestimonialFlex>
 )
}

export default Testimonial;