import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MemeCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};
export default Card;
