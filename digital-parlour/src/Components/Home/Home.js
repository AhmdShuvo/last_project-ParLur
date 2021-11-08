import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Home = () => {

    
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

               <section className="my-5">
                   <center><h1 >Our Awesome <span style={{color:"red"}}>Services</span></h1></center>

                   <Row xs={1} md={2} className="g-4">

                   </Row>
               </section>


        </>
    );
};

export default Home;