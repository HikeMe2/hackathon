import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function login(username, password) {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
}

async function signUp(username, password, firstName, lastName) {
  const response = await api.post("/auth/signup", {
    username,
    password,
    firstName,
    lastName,
  });
  return response.data;
}

export { login, setAuthHeader, signUp };
