import React, { useState } from "react";
import { Alert, Container, Form, Button, Row, Col } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
function ProfilePage() {
  const { activeUser } = useAuth();
  const [email, setEmail] = useState(activeUser?.email);
  const [password, setPassword] = useState(activeUser?.password);
  const [firstName, setFirstName] = useState(activeUser?.firstName);
  const [lastName, setLastName] = useState(activeUser?.lastName);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email || password || firstName || lastName) {
      // <Alert>Please provide all values</Alert>;
    }
  };

  return (
    <Container>
      <h1 className="text-center my-3">Profile</h1>
      <Row className="justify-content-center">
        <Col xs="10" md="7" lg="5">
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Button
              style={{
                marginLeft: "auto",
                backgroundColor: "#563d7c",
                borderColor: "#563d7c",
              }}
              className="mt-3"
              onClick={handelSubmit}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
