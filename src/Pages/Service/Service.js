import React from 'react';
import { Row,Col, Container} from 'react-bootstrap';
import shohaibStack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import mobile from '../../images/icons/service1.png';
import graphics from '../../images/icons/service2.png';
import web from '../../images/icons/service1.png';
import carousel from '../../images/carousel-1.png';
import carouse2 from '../../images/carousel-2.png';
import carouse3 from '../../images/carousel-3.png';

const Service = () => {
   return (
      <Container >
      <Row  style={{marginTop:'60px'}}>
         <Col md={1}>
         </Col>
         <Col md={2} >
            <img style={{height:'36px', width:'140px'}} src={shohaibStack} alt="" />

         </Col>
         <Col md={2} >
               <img 
               style={{height:'44px', width:'129px'}}
               src={google} alt="" />
         </Col>
         <Col md={2}>
            <img
              style={{height:'56px', width:'99px'}}
             src={uber} alt="" />
         </Col>
         <Col md={2}>
               <img
               style={{height:'67px', width:'120px'}}
               src={netflix} alt="" />
         </Col>
         <Col md={2} >
               <img
               style={{height:'51px', width:'161px'}}
               src={airbnb} alt="" />
         </Col>
         
      </Row>
      <Row style={{marginTop:'150px'}}>
       <div style={{marginBottom:'50px'}} >
       <h3 >Provide awesome <span style={{color:'#7AB259'}}>service </span></h3>
       </div>

         <Col md={4} >
            <div>
               <img style={{height:'74px',width:'74px',marginTop:'20px'}} src={mobile} alt="" />
            </div>
            <div style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'28px',textAlign:'center',letterSpacing:'.396px'}}>
               <h3>Web & Mobile design</h3>
               <p>We craft stunning and amazing web UL using a well drafted UX to fit your product</p>
            </div>

         </Col>
         <Col md={4} style={{
            backgroundColor:'#FFFFFF',
            //position:'absolute',
            height:'319px',
            width:'370px',
            left:'536px',
            top:'1119px',
            boxShadow:'0px 4px 88px rgba(0, 0, 0, 0.1)',
            borderRadius:'10px'
         }}>
            <div>
               <img style={{height:'74px',width:'74px',marginTop:'20px'}} src={graphics} alt="" />
            </div>
            <div style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'28px',textAlign:'center',letterSpacing:'.396px'}}>
               <h3>Graphic design</h3>
               <p>Amazing flyers,social media posts and brand representations that would make your brand stand out</p>
            </div>
         </Col>
         <Col md={4}>

         <div>
               <img style={{height:'74px',width:'74px',marginTop:'20px'}} src={web} alt="" />
            </div>
            <div style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'28px',textAlign:'center',letterSpacing:'.396px'}}>
               <h3>Web Development</h3>
               <p>With well written codes,we build amazing apps for all platforms,mobile and web apps in general</p>
            </div>
            
         </Col>


      </Row>


      <Row style={{
         backgroundColor:'#111430',
         width:'1524px',
         height:'724px',
         left:'-58px',
         marginLeft:'none',
         container:'none',


         top:'1582'
      }}>
       <div style={{marginTop:'80px',fontFamily:'Poppins',fontSize:'34px',lineHeight:'43px',letterSpacing:'1.396px',color:'white'}}>
          <h3>Here are some of <span style={{color:'#7AB259'}}>our works </span></h3>
       </div>

       <Col md={4}> 
       <img 
       style={{width:'465.49px',height:'334.7px',borderRadius:'8.23879px'}}
       src={carousel} alt="" />
       </Col>
       <Col md={4}> 
       <img 
       style={{width:'465.49px',height:'334.7px',borderRadius:'8.23879px'}}
       src={carouse2} alt="" />
       </Col>
       <Col md={4}> 
         <img 
         style={{width:'465.49px',height:'334.7px',borderRadius:'8.23879px'}}
         src={carouse3} alt="" />
       </Col>
         
         </Row>
      </Container>
    
   );
};

export default Service;