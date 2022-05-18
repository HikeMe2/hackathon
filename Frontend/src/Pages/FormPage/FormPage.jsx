import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Results from "./Results";
import trails from "../../data/trails.json";

function FormPage() {
  const [time, setTime] = useState();
  const [length, setLength] = useState();
  const [hiking, setHiking] = useState();
  const [difficulty, setDifficulty] = useState();
  const [location, setLocation] = useState();
  const [results, setResults] = useState(trails);
  function onSearch() {
    setResults();
  }

  return (
    <Container style={{textAlign:"-webkit-center", position: "relative"}}>
      <h1 className="mb-5">Find your new hike!</h1>
      <Form>
        <Form.Group className="mb-5">
          <Form.Label style={{ position: "absolute", top: "12%", left: "36%" }} >How much time do u want to walk a day?</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="hours"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label style={{ position: "absolute", top: "28%", left: "36%" }}>How many kilometers in total?</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="kilometers"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Select
          className="mb-5"
          aria-label="Default select example"
          value={hiking}
          style={{ width: "30%" }}
        >
          <option>Choose hiking environment</option>
          <option value="valley">valley</option>
          <option value="mountain">mountain</option>
          <option value="alpine">alpine</option>
        </Form.Select>
        <Form.Select
          className="mb-5"
          aria-label="Default select example"
          value={difficulty}
          style={{ width: "30%" }}
        >
          <option>Choose difficulty</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
        </Form.Select>
        <Form.Group className="mb-5">
          <Form.Label style={{ position: "absolute", top: "74%", left: "36%" }}>Choose a location from the list</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="search country"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>

      <Row className="justify-content-center">
        <Col md="12" lg="10" xl="10">
          <Row xs={1} sm={2} md={3} className="g-4 py-3">
            <Results trails={results} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FormPage;
