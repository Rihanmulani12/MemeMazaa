import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./MemeCard.css"; // Import custom CSS file

const MemeCard = (props) => {
  const navigate = useNavigate();
  
  return (
    <Card className="card" style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
          variant="primary"
          className="edit-button" // Add a CSS class for styling
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
