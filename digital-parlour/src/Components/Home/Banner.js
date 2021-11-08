import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
     <div  style={{backgroundColor:'#f7cbdf36',padding:'40px'}}>
         <Container className="d-lg-flex">

             <div>
                 <h1>Let Us Handle Your Skin <span style={{color:"orangered"}}>Professionally</span></h1>
                 <p>At the Beauty Parlour, we believe in beauty with a conscience. We have created a salon that offers the highest quality hair services in a setting that is healthier for the environment, our guests and our staff. The Beauty Parlour is designed and built primarily with recycled materials: the floor is made of reclaimed wood from a local grain elevator – preserving and showcasing its natural texture – and most of the fixtures and furniture are refurbished or original vintage pieces.</p>
             </div>
             <div className="container ">
                 <img className="img-fluid" src="./Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png" alt="" />
             </div>
                   

         
</Container>

   <div className="d-flex container mt-4 align-items-center">
       <div className="me-5">
         <h1 style={{color:"orangered",fontSize:'48px'}}>500 + </h1>
         <h5>Happy Coustomers</h5>
       </div>
       <div>
         <h1 style={{color:"orangered",fontSize:'48px'}}>16 + </h1>
         <h5>Services</h5>
       </div>
   </div>
     </div>
    );
};

export default Banner;