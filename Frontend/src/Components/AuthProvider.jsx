import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

function AuthProvider({ children }) {
/*   const { login, signup, setAuthHeader } = useAuth();
 */  const [activeUser, setActiveUser] = useState(
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
  async function handleLogin(email, password) {
    const user = await login();
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
  async function handleSignUp(email, password, firstName, lastName) {
    const user = await signup();
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
