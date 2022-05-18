import React, { useState, useMemo } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import Results from "./Results";
import trails from "../../data/trails.json";

function FormPage() {
  const [time, setTime] = useState("");
  const [length, setLength] = useState("");
  const [hiking, setHiking] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [country, setCountry] = useState("");
  const [climb, setClimb] = useState("");
  const [maximumAttitude, setMaximumAttitude] = useState("");
  const [minimumAttitude, setMinimumAttitude] = useState("");
  const [meters, setMeters] = useState("");

  const [results, setResults] = useState(trails);

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };

  function onSearch() {
    setResults();
  }

  return (
    <Container  >
      <h1 className="text-center my-3">Find your new hike!</h1>
      <Row className="justify-content-center">
        <Col xs="10" lg="6">
          <Form className="my-3 ">
            <Form.Group className="mb-3">
              <Form.Label>How much time do you want to walk a day?</Form.Label>
              <Form.Control
                type="number"
                placeholder="hours"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                How many kilometers do you want to hike in total?
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Km"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Please choose the hiking environment</Form.Label>
              <Form.Select aria-label="Default select example" value={hiking}>
                <option>Choose...</option>
                <option value="valley">Valley</option>
                <option value="mountain">Mountain</option>
                <option value="alpine">Alpine</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Please choose the difficulties</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={difficulty}
              >
                <option>Choose...</option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
                <option value="six">6</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Please choose a country</Form.Label>
              <Select
                options={options}
                value={country}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>How many meters do you want to climb?</Form.Label>
              <Form.Control
                type="number"
                placeholder="M"
                value={climb}
                onChange={(e) => setClimb(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                What is the maximum attitude are you ready to reach?
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="MAX"
                value={maximumAttitude}
                onChange={(e) => setMaximumAttitude(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                What is the minimum attitude are you ready to start from?
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="MIN"
                value={minimumAttitude}
                onChange={(e) => setMinimumAttitude(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                How many meters do you want to climb down?
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="M"
                value={meters}
                onChange={(e) => setMeters(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

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
