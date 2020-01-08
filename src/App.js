import React, { useState } from "react";
import uuidv1 from "uuid/v1";
import "bootstrap/dist/css/bootstrap.min.css";

import mainstream from "./data/mainstream/menu-mainstream";
import vegan from "./data/vegan/menu-vegan";
import vegetarian from "./data/vegetarian/menu-vegetarian";
import { Card, Nav, CardGroup, Container } from "react-bootstrap";

function App() {
  const [type, setType] = useState({ diet: mainstream, name: "Mainstream" });

  return (
    <Container>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link
            onClick={() => setType({ diet: mainstream, name: "Mainstream" })}
          >
            Mainstream
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setType({ diet: vegan, name: "Vegan" })}>
            Vegan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => setType({ diet: vegetarian, name: "Vegetarian" })}
          >
            Vegetarian
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {type.diet.map((item, index) => {
        const menuItems = Object.values(item);
        return (
          <div key={uuidv1()}>
            <h2>
              Day {index} - {type.name}{" "}
            </h2>
            <CardGroup>
              {menuItems.flat().map(({ title, category, link, image }) => {
                return (
                  <Card style={{ width: "18rem" }} key={uuidv1()}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Card.Img variant="top" src={image} />
                    </a>
                    <Card.Body>
                      <Card.Title> {category}</Card.Title>
                      <Card.Text>{title}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
          </div>
        );
      })}
    </Container>
  );
}

export default App;
