import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Results from './Results';

function FormPage(props) {
    const [ time, setTime ] = useState();
    const [ length, setLength ] = useState();
    const [ hiking, setHiking ] = useState();
    const [ difficulty, setDifficulty ] = useState();
    const [ location, setLocation ] = useState();
    const [ results, setResults ] = useState([]);
    function onSearch() {
        setResults()
    }
  

    return (
        <Container>
            <h1 className="mb-5">Find your new hike!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>How much time do u want to walk a day?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="hours"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>How many kilometers in total?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="kilometers"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Select className="mb-3" aria-label="Default select example" value={hiking}>
                    <option>Choose hiking environment</option>
                    <option value="valley">valley</option>
                    <option value="mountain">mountain</option>
                    <option value="alpine">alpine</option>
                </Form.Select>
                <Form.Select className="mb-3" aria-label="Default select example" value={difficulty}>
                    <option>Choose difficulty</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Choose a location from the list</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="search country"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form>
            <Results trails={results} />
        </Container>
    );
}

export default FormPage;
