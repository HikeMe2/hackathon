import React, { useState } from "react";
import { Alert, Container, Form, Button } from "react-bootstrap";

function ProfilePage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handelSubmit = (e) => {
      e.preventDefualt()
    if (email || password || firstName || lastName) {
      <Alert>Please provide all values</Alert>;
    }
  };


  return (
    <Container>
      <h1 className="mb-5">Profile</h1>
      <Form onSubmit={handelSubmit}>
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
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name and Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name and Last Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="Phone"
            placeholder="Phone Number"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ProfilePage;
