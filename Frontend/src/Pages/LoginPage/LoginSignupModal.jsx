import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import useAuth from "../../hooks/useAuth";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './LoginSignupModal.css'

function LoginSignupModal() {
  const [ isLoginModal, setIsLoginModal, ] = useState(false);
  const { isModalShow, onModalClose } = useAuth();
  


    return (
      <Modal show={isModalShow} onHide={onModalClose} centered>
        <Modal.Header className="modal-header">
          <Modal.Title>
            <Button
              className="modal-header-btn-link me-3"
              variant="link"
              onClick={() => setIsLoginModal(false)}
            >
              SIGNUP
            </Button>
            <Button
              className="modal-header-btn-link ms-3"
              variant="link"
              onClick={() => setIsLoginModal(true)}
            >
              LOGIN
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          {isLoginModal ? <LoginForm /> : <SignUpForm />}
        </Modal.Body>
      </Modal>
    );
}

export default LoginSignupModal;