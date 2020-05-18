import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './Testimonial';
import Title from '../styles/Title';
import './Testimonials.css';

const TestimonialsContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 30px;
`;

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      testimonials: []
    }
  }

  fetchTestimonials = async () => {
    try{
      const response = await fetch(`http://localhost:8000/api/testimonials`);
      const result = await response.json();
      if(result){
        this.setState({ testimonials: result.testimonials });
       }
       console.log('could not fetch testimonials')
     }catch(err) {
       console.log(err);
     }
 }

 componentDidMount() {
   this.fetchTestimonials();
 }

render() {
  return (
    <TestimonialsContainer>
   <Title className='title' style={{left: '-210px', top: '150px'}} >{this.props.title[2]}</Title>
   <Carousel 
    nextIcon={false}
    prevIcon={false}
    touch={true} 
    wrap={true}
    style={{height: '400px'}}
    bsPrefix= "myNewCarousel carousel"
    >
      {this.state.testimonials.map(testimonial => (
     <Carousel.Item>
        <Testimonial
        testimonial={testimonial} />
     </Carousel.Item>
      ))}
   </Carousel>
  </TestimonialsContainer>
 )
}
}

export default Testimonials;
