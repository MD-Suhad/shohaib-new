import React from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import profileIcon from '../../images/logos/logo.png';
import bannerImage from '../../images/logos/Frame.png'
import styled from 'styled-components';
import './Navigation.css';
import useAuth from '../../Hooks/useAuth';



// const StyledFirst = styled.div`
// background-color:'#FBD062';
// text-align:right;
// font-weight:40px;
// display:flex;

// `;
const ButtonDesigned = styled(Button)`
background-color:#111430;
color:white;
width:134px;
height:45px';
margin-left:1171px;
margin-button:40px;
border-radius:5px;

`;

const Navigation = () => {

   const {user} = useAuth()


   return (
      <div  >

         <Navbar className="border border-danger" style={{ backgroundColor: '#FBD062',paddingLeft:'160px',height:'684.58px',width:'1930px',marginTop:'-113px'
      }}>

            <Navbar.Brand href="#home">

               <Row>
                  <Col md={8} xs={12} className="d-flex justify-content-right">

                     <div>
                        <img style={{ height: '50px', width: '200px' }} src={profileIcon} alt="" />
                     </div>


                     </Col>

                        <Col md={4} xs={12}>
                        <Nav >
                           <Nav.Link href="home">Home</Nav.Link>
                           <Nav.Link href="#course">Our Portfolio</Nav.Link>
                           <Nav.Link href="#book">Our Team</Nav.Link>
                           <Nav.Link href="#service">Contact</Nav.Link>
                           {
                              user?.email? 
                              <ButtonDesigned><Button>Logout</Button>
                              </ButtonDesigned>
                              
                              
                              :
                              <Nav.Link href="#login" to="/login">Login</Nav.Link>
                           }

                        </Nav>
                        </Col>

                     
               </Row>
               <Row className="py-4 m-4">

                  <Col className="align-self-center " md={8} xs={12} style={{ textAlign: 'left',paddingRight:'30px', }}>
                     <h2>Let's Grow Up</h2>
                     <h2>Your Brand</h2>
                     <h2>Your To the Next Level</h2>
                     <p style={{fontWeight:'initial'}}> 
                        A creative agency consists of one or more teams of experts in different fields, design, technology,<br /> strategy,Their teams often include, web developers and data visualization exper
                     </p>
                    
                    <ButtonDesigned>Hire Us</ButtonDesigned>
                     
                  </Col>

                  <Col md={4} xs={12} className="d-flex" style={{maxWidth:'800px'}}>
                     <img style={{ height: '255px', width: '395px' }} src={bannerImage} alt="" />
                  </Col>

               </Row>


            </Navbar.Brand>
         </Navbar>





      </div>

      

   );
};

export default Navigation; 