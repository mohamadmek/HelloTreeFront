import React, { useState } from 'react';
import Slider from '../../components/Slider/Slider';
import Card from '../../components/Cards/Card';
import Line from '../../components/Line/Line';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
 const Home = () => {
   const [title] = useState(['we care for your safety', 'about us', 'testimonials']);
 return (
  <div>
    <Slider title={title} />
    <Card  />
    <Line />
    <AboutUs title={title} />
    <Line />
    <Testimonials title={title} />
    <Footer />
  </div>
 )
}

export default Home;