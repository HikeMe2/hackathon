import React, { useState,useMemo } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import Results from "./Results";
import trails from "../../data/trails.json";
import { search } from "../../services/api";

function FormPage() {
  const [time, setTime] = useState('');
  const [length, setLength] = useState('');
  const [hiking, setHiking] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [country, setCountry] = useState('');
  const [ results, setResults ] = useState([]);
  const [ isSearching, setIsSearching ] = useState(false);
  const [ emptyFieldError, setEmptyFieldError ] = useState(false);
    
    const options = useMemo(() => countryList().getData(), []);

    const changeCountryHandler = (value) => {
      setCountry(value);
    };

  async function handleSearch() {
    if (!time || !length || !hiking || !difficulty || !country) {
      setEmptyFieldError(true)
    }
    else { 
      setEmptyFieldError(false)
      const userAnswers = { time, length, hiking, difficulty, country }
      console.log(userAnswers);
      setIsSearching(true);
      // await search(userAnswers);
      setIsSearching(false);
      setResults(trails);
    }
    }
  
  function handleClearSearch() { 

  }

  return (
    <Container>
      <h1 className="text-center my-3">Find your new hike!</h1>
      <Row className="justify-content-center">
        <Col xs="10" lg="6">
          <Form className="my-3 ">
            {emptyFieldError && (
              <Alert variant="danger">Error: please complete all fields!</Alert>
            )}
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
              <Form.Select
                aria-label="Default select example"
                value={hiking}
                onChange={(e) => setHiking(e.target.value)}
              >
                <option value='' >Choose...</option>
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
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value={''}>Choose...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Please choose a country</Form.Label>
              <Select
                options={options}
                value={country}
                onChange={changeCountryHandler}
              />
            </Form.Group>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="outline"
                style={{
                  marginRight: "auto",
                  color: "#563d7c",
                  borderColor: "#563d7c",
                }}
                type="button"
                onClick={handleClearSearch}
              >
                Clear Search
              </Button>
              <Button
                disabled={isSearching ? true : false}
                className="p-form-btn"
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#563d7c",
                  borderColor: "#563d7c",
                }}
                type="button"
                onClick={handleSearch}
              >
                Search
              </Button>
              {isSearching && (
                <Spinner className="mx-1" animation="border" size="sm" />
              )}
            </div>
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
