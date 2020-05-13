import React from 'react';
import styled from 'styled-components';

const BrochureRow = styled.div`
 display: flex;
 border-bottom: 1px solid white;
 padding-bottom: 4rem;
 margin-bottom: 40px;
.brochureName {
 display: flex;
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
 margin-top: 25px;
}
`;

 const Brochure = () => {
 return (
  
  <BrochureRow>
   <div className='brochureName'>
   <i className="fas fa-book-open"></i>
     <div className='brochureDescription'>
      <div className='brochureHeader'>
        brochure
      </div>
      <div className='brochureText'>
      Ut wisi enim ad minim veniam,ea commodo consequat.
      </div>
     </div>
   </div>
   <button>download</button>
  </BrochureRow>
 )
}

export default Brochure;
