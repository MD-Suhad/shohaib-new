import React, { useState } from 'react';
import { Row, Container, Col, Form, Button, } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import profile from '../../images/3837171.png';
import './Login.css';


const Login = () => {

   const [loginData,setLoginData] = useState({})
   const[loginUser] = useAuth();
   
   const handleOnChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData);
   }
   
   const handleLoginSubmit = e =>{
      loginUser(loginData.email,loginData.password);
      e.preventDefault();
   }


   return (
      <div className="login-page ">
         <Container >
           
               <Form
               className="login-form d-flex align-content-center"
               
               onSubmit={
                  handleLoginSubmit
               
               }
               >
               <Row className=" d-flex align-content-center">
                  <Col sm={12} md={6}>
                  <Row className="d-flex justify-content-center"  >
                  <Col style={{ margin: '300px', textColor: 'white' }} className="my-5 text-center" md={4}>
                     <div className="img-Type" style={{ color: 'white' }}>
                        <h2>Welcome</h2>
                        <p>To Your Account</p>
                        <img src={profile} alt="" />
                     </div>
                     </Col>
                     </Row>
               <Row className="d-flex -content-center" >
                     
                     <Col sm={12} md={12}>
                     <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label style={{ color:'white'}}>Email address</Form.Label>
                        <Form.Control
                           type="email"
                           name="email"
                           placeholder="Enter Email"
                           onBlur={handleOnChange}
                           required
                           />
                     </Form.Group>
                     </Col>
                     
                     <Col sm={12} md={12}>
                     <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label style={{ color:'white',textAlign:'left'}}>Your Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onBlur={handleOnChange} 
                        required
                        />
                     </Form.Group>
                     </Col>
                     </Row>



                     

                    
                     
                    <Row>
                    <Col sm={12} md={12}>
                     <Button className="my-3" variant="primary" type="submit">
                     Submit
                     </Button>
                     </Col>
                    </Row>
                  </Col>

                  <Col sm={12} md={6}>

                  </Col>
               </Row>

                     
               </Form >


          


         </Container>
      </div>






   );
};

export default Login;