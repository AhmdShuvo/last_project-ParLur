import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./Details.css"

const Details = () => {
    const{serviceId}=useParams()

    const  [service,setService]=useState({})

    useEffect(()=>{
        fetch("http://localhost:9000/services").then(res=>res.json()).then(data=>{
                 const match= data.find(service=>service._id===serviceId);
                 setService(match);

        });
    },[serviceId])

    const {picture,about,name,cost}=service
    return (
      
           <center>
                <Card style={{ width: '18rem' }} className="border shadow-lg p-3 my-5 bg-white rounded">
        <center><Card.Img variant="top" src={picture} className="w-25" /></center>
        <Card.Body>
         <center> <Card.Title>{name}</Card.Title></center>
          <Card.Text>
           {about}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> $ {cost}</ListGroupItem>
        </ListGroup>
      </Card>
           </center>
    );
};

export default Details;