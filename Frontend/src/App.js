import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./Pages/FormPage/FormPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/profile" element={<ProfilePage/> }/>
      </Route>
    </Routes>
  );
}

export default App;
