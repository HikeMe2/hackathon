import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider";
import MainNavbar from "./Components/MainNavbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import FormPage from "./Pages/FormPage/FormPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <MainNavbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
