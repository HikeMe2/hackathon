import React, { useState } from "react";
import { Alert, Container, Form, Button } from "react-bootstrap";
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

        <Button variant="primary" >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ProfilePage;
