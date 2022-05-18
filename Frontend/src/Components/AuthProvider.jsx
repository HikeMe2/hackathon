import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null
  );
  const [isModalShow, setIsModalShow] = useState(false);
  const navigate = useNavigate();

  function handleModalShow() {
    setIsModalShow(true);
  }
  function handleModalClose() {
    setIsModalShow(false);
  }
  function handleLogin(email, password) {
    const user = {
      email: "jing@hikeme2.com",
      password: "123",
    };
    if (user) {
      localStorage.activeUser = JSON.stringify(user);
      setActiveUser(user);
      handleModalClose();
      navigate("/");
    }
  }
    function handleLogout() {
        localStorage.removeItem("activeUser");
        setActiveUser(null);
  }
    function handleSignUp(user) {
       if (user) {
         localStorage.activeUser = JSON.stringify(user);
         setActiveUser(user);
         console.log(user);
         handleModalClose();
         navigate("/");
       }
  }
  return (
    <AuthContext.Provider
          value={{
          activeUser,
        isModalShow,
        onLogin: handleLogin,
        onSignUp: handleSignUp,
        onLogout: handleLogout,
        onModalShow: handleModalShow,
        onModalClose: handleModalClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
