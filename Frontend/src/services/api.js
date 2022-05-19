import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

async function login(email, password) {
  const response = await api.post("/user/login", { email, password });
  return response.data;
}

async function signUp(email, password, firstName, lastName, confirmPassword) {
  const response = await api.post("/user/signup", {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    confirm_password: confirmPassword,
  });
  return response.data;
}

async function search(userAnswers) {
  // const response = await api.get("/trails", userAnswers);
  const response = await api.get("/trails/processquestionair", {
    params: userAnswers,
  });
  return response.data;
}

export { login, signUp, search };
