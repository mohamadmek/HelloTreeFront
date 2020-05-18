import React from 'react';
import styled from 'styled-components';

const BrochureRow = styled.div`
 display: flex;
 border-bottom: 1px solid white;
 padding-bottom: 4rem;
 margin-bottom: 40px;
 flex-wrap: wrap;
.brochureName {
  display: flex;
 width: 70%;
}
.brochureName i {
 color: ${props => props.theme.white};
 font-size: 5rem;
 margin-top: 1rem;
}
.brochureDescription {
 margin-left: 1.8rem;
}
.brochureHeader {
 color: ${props => props.theme.white};
 text-transform: uppercase;
 font-size: 1.8rem;
}
.brochureText {
 margin-top: 2rem;
 color: ${props => props.theme.white};
 max-width: 86.5%;
}
button {
 background: transparent;
 color: #fff;
 padding: 0 30px;
 height: 32px;
 margin: 0 auto;
 margin-top: 25px;
}
@media all and (max-width: 500px) {
  .brochureName {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .brochureText {
    max-width: 100%;
   
  }
  .brochureDescription {
    margin-left: 0 !important;
  }
}
`;

 const Brochure = ({brochure}) => {
 return (
  <BrochureRow>
   <div className='brochureName'>
   <i className="fas fa-book-open"></i>
     <div className='brochureDescription'>
      <div className='brochureHeader'>
        {brochure.title}
      </div>
      <div className='brochureText'>
      {brochure.text}
      </div>
     </div>
   </div>
   <button>download</button>
  </BrochureRow>
 )
}

export default Brochure;
