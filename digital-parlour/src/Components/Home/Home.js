import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Service from './Service/Service';
import Testimonials from './Testimonials';

const Home = () => {

    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/services").then(res=>res.json()).then(data=>setservices(data));
  
    },[])


    return (
               
        <>
            <section style={{backgroundColor:"#f7cbdf36"}}>
            <Container className="d-lg-flex p-3"  >
            <div className="container m-5">
                <center><h1 className="fs-1 text-dark">Beautiful Parlour for Every Woman </h1>
                <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta minima nobis labore ducimus nemo omnis commodi, vero assumenda velit?</p></center>
                <center><button className="btn-danger p-3 text-white fs-4 my-5 border rounded-3">Get Appointment</button></center>
            </div>
            <img src="./Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png" alt="" width="50%" />
        </Container>
        </section>

              <Container className="mb-5">
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
               <center><Link to="/services"><button className="btn-danger px-3 border rounded-3 fs-3 py-1">See More</button></Link></center>
              </Container>

             <center> <Banner></Banner></center>

             <Testimonials></Testimonials>


        </>
    );
};

export default Home;