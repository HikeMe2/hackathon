import React, { useState } from "react";
import { Button, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import useAuth from "../../hooks/useAuth";

function SignUpForm() {
    const { onModalClose, onSignUp } = useAuth();
    const [ isSigningUp, setIsSigningUp ] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [ lastName, setLastName ] = useState("");
    
    async function handleSignUp() {
        await onSignUp(email, password, firstName, lastName);
    }

    return (
      <Form>
        <h5 className="mb-3 px-2 ">Sign Up</h5>
        {/* {emptyFieldError && (
          <Alert variant="danger">Error: please complete all fields!</Alert>
        )}
        {mismatchPassword && (
          <Alert variant="danger">Please retype password!</Alert>
        )}
        {schemaError &&
          schemaError.map((error, index) => (
            <Alert key={index} variant="danger">
              {error}
            </Alert>
          ))} */}
        <FloatingLabel
          controlId="floatingEmailAddress"
          label="Email address"
          className="mb-2"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-2"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword2"
          label="Retype Password"
          className="mb-2"
        >
          <Form.Control
            type="password"
            placeholder="Retype Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingFirstName"
          label="First Name"
          className="mb-2"
        >
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingLastName"
          label="Last Name"
          className="mb-2"
        >
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FloatingLabel>
       
        <div className="text-end">
          <Button
            disabled={isSigningUp ? true : false}
            variant="link"
            style={{ color: "#563d7c", textDecoration: "none" }}
            onClick={onModalClose}
          >
            CANCEL
          </Button>
          <Button
            disabled={isSigningUp ? true : false}
            variant="link"
            style={{ color: "#563d7c", textDecoration: "none" }}
            onClick={handleSignUp}
          >
            SIGNUP
          </Button>
          {isSigningUp && <Spinner animation="border" size="sm" />}
        </div>
      </Form>
    );
}

export default SignUpForm;