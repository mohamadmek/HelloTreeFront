import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  text-align: right;
  max-width: 85%;
  margin-top: 2rem;
  span {
   margin-left: 4rem;
   font-weight: bold;
   color: ${props => props.theme.white};
  }
  span:hover{
   cursor: pointer;
   border-bottom: 1px solid white;
  }
`;

const Menu = () => {
 return (
  <MenuContainer>
   <span>Home</span>
   <span>About us</span>
   <span>Products</span>
   <span>Downloads</span>
   <span>Contacts</span>
  </MenuContainer>
 )
}

export default Menu;
