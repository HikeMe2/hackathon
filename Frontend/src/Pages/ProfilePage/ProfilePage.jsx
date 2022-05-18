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
    <Container style={{ textAlign: "-webkit-center", position: "relative" }}>
      <h1 className="mb-5">Profile</h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label style={{ position: "absolute", top: "14%", left: "36%" }}>
            Email address
          </Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label style={{ position: "absolute", top: "32%", left: "36%" }}>Password</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicText">
          <Form.Label style={{ position: "absolute", top: "50%", left: "36%" }}>First Name</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicText">
          <Form.Label style={{ position: "absolute", top: "68%", left: "36%" }}>Last Name</Form.Label>
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default ProfilePage;
