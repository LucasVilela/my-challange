import React, { useState } from "react";
import {
  Card,
  Nav,
  CardGroup,
  Container,
  Col,
  Row,
  Modal,
  Button
} from "react-bootstrap";
import uuidv1 from "uuid/v1";
import Iframe from "react-iframe";

import mainstream from "./data/mainstream/menu-mainstream";
import vegan from "./data/vegan/menu-vegan";
import vegetarian from "./data/vegetarian/menu-vegetarian";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [type, setType] = useState({ diet: mainstream, name: "Mainstream" });
  const [startDate, setStartDate] = useState(new Date());
  const [viewRecipe, setViewRecipe] = useState(false);
  const today = new Date();

  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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

      <Modal
        show={viewRecipe}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Button variant="secondary" onClick={() => setViewRecipe(false)}>
          Close
        </Button>
        <Modal.Body>
          <div style={{ border: "1px solid black", height: "100vh" }}>
            <Iframe url={viewRecipe} width="100%" height="100%" />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setViewRecipe(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {type.diet.map((item, index) => {
        const menuItems = Object.values(item);
        const day = index + 1;
        return (
          <div key={uuidv1()}>
            <h2>
              Day {day} - {type.name}{" "}
            </h2>
            <CardGroup>
              {menuItems.flat().map(({ title, category, link, image }) => {
                return (
                  <Card style={{ width: "18rem" }} key={uuidv1()}>
                    <div onClick={() => setViewRecipe(link)}>
                      <Card.Img variant="top" src={image} />
                    </div>
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
