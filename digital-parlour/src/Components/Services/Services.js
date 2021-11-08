import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/services").then(res=>res.json()).then(data=>setservices(data));
  
    },[])
    return (
        <>

          <Container>
          <section className="my-5">
               <center><h1 >Our Awesome <span style={{color:"red"}}>Services</span></h1></center>

               <Row xs={1} md={3} className="g-4">
                   {
                       services.map(service=><Service
                       key={service._id}
                       service={service}
                       ></Service>)
                   }

               </Row>
           </section>
          </Container>


    </>
    );
};

export default Services;