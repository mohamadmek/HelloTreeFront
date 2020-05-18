import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';

import './Slider.css';
import Title from '../styles/Title';

 class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      slides: [],
    }
  }
   fetchSlides = async () => {
     try{
       const response = await fetch(`http://localhost:8000/api/slides`);
       const result = await response.json();
       if(result){
         this.setState({ slides: result.slides });
        }
        console.log('could not fetch slides')
      }catch(err) {
        console.log(err);
      }
  }

  componentDidMount() {
    this.fetchSlides();
  }
render() {
  return(
    <>
   {console.log(typeof(slides))}
   <Title>{this.props.title[0]}</Title>
   <Carousel 
    
    nextIcon={false}
    prevIcon={false}
    touch={true} 
    wrap={true}
    style={{height: '400px'}}
    bsPrefix= "myCarousel carousel"
    >
    {this.state.slides.map(slide => (
      <Carousel.Item>
      <Slide slide={slide} />
      </Carousel.Item>
    ))}
  {/* <Carousel.Item>
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
  </Carousel.Item> */}
</Carousel>
</>
 );
}
 };
 

export default Slider;
