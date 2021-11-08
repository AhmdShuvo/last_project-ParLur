import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = ({service}) => {

    const {picture,about,name,cost}=service;

    return (
      <div className="my-5">
            <Card style={{ width: '18rem' }} className="border shadow-lg p-3 mb-5 bg-white rounded">
        <center><Card.Img variant="top" src={picture} className="w-25" /></center>
        <Card.Body>
         <center> <Card.Title>{name}</Card.Title></center>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> $ {cost}</ListGroupItem>
        </ListGroup>
        <button className="text-light border rounded-3" style={{backgroundColor:'orangered',padding:'20px,'}}>Get Appointment</button>
      </Card>

     
      </div>
    );
};

export default Service;