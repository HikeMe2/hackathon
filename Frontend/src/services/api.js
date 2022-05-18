import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function login(email, password) {
  const response = await api.post("/user/login", { email, password });
  return response.data;
}

async function signUp(email, password, firstName, lastName) {
  const response = await api.post("/user/signup", {
    email,
    password,
    firstName,
    lastName,
  });
  return response.data;
}

export { login, setAuthHeader, signUp };
