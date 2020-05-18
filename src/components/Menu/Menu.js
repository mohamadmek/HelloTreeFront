import React, {Component} from 'react';
import styled from 'styled-components';
import './Menu.css';


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
  
  @media all and (max-width: 630px){
    display: none;   
  }

`;

const MobileMenu = styled.div`
  text-align: right;
  max-width: 85%;
  margin-top: 2rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: none;
  @media all and (max-width: 630px){
    display: block;
    .overlay {
    position: absolute;
    z-index: 50;
    top: 0;
    bottom:0;
    right:0;
    left: 0;
    background: rgba(0,0,0,0.3);
    display: ${props => props.isShow ? 'block' : 'none'};
  }
  }
`;

const MobileSideMenu = styled.div`
  position: fixed;
  z-index: 100;
  text-align: right;
  width: 250px;
  background: #fff;
  margin: 0 auto;
  top: 0;
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 10px;
  display: ${props => props.isShow ? 'block' : 'none'};
  right: ${props => props.isShow ? '0' : '300px'};
  color: ${props => props.theme.deepRed};
  height: 100vh;
  animation: translate 0.5s ease-in-out;
  @keyframes translate {
    from{ right: -250px }
    to{ right: 0 }
  }
  .mini-menu {
    padding: 10px 20px;
    margin: 0 auto;
    width: 120px;
  }
  .mini-menu:hover {
    border-bottom: 2px solid ${props => props.theme.deepRed};
  }
 
`;



class Menu extends Component{
  constructor() {
    super();
    this.state = ({
      isShow: false,
    })
  }

   changeIsShow = () => {
    this.setState({ isShow: !this.state.isShow })
  }
  render() {
    return (
      <div id='menu'>
       <MenuContainer isShow={this.state.isShow}>
       <span>Home</span>
       <span>About us</span>
       <span>Products</span>
       <span>Downloads</span>
       <span>Contacts</span>
       </MenuContainer>
       <MobileMenu onClick={this.changeIsShow} isShow={this.state.isShow} >
         Menu
         <div className='overlay'></div>
       </MobileMenu>
       
       <MobileSideMenu isShow={this.state.isShow}>
         <div onClick={this.changeIsShow} style={{marginRight: '40px', marginTop: '20px'}}> Back ></div>
         <div className='mini-menu'>Home</div>
         <div className='mini-menu'>About us</div>
         <div className='mini-menu'>Products</div>
         <div className='mini-menu'>Downloads</div>
         <div className='mini-menu'>Contacts</div>
       </MobileSideMenu>
      </div>
     
    )
  }
 
}

export default Menu;
