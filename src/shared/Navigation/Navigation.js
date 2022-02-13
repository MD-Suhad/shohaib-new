import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import profile from '../../images/navbar-logo.png';
import styled from 'styled-components';
import './Navigation.css';
import Carousel from '../../Pages/Home/Carousel/Carouseled';

const StyledFirst = styled.div`
background-color:blue;
text-align:right;
font-weight:40px;

`;

const Navigation = () => {


   return (
      <div >
           <StyledFirst>
         <Navbar  bg="dark" variant="dark">
            <Container  >
               <Navbar.Brand href="#home">
                  <Row>
                     <Col lg={6}>
                        <img  style={{height:'30px',width:'200px'}} src={profile} alt="" />
                     </Col>
                    
                  </Row>
                  </Navbar.Brand>
               
               <Nav className="d-flex justify-content-end me-auto">
                  <Nav.Link href="home">Home</Nav.Link>
                  <Nav.Link href="#course">Course</Nav.Link>
                  <Nav.Link href="#book">Book</Nav.Link>
                  <Nav.Link href="#service">Service</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  
               </Nav>

               
               

               
            </Container>
            {/* <Navbar bg="primary" variant="dark">
               <Nav.Link href="login">Login</Nav.Link>
               </Navbar> */}
            <br />
           
         </Navbar>
         </StyledFirst>

         <Carousel>
       
         </Carousel>
         
        

      </div>

   );
};

export default Navigation;