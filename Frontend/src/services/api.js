import axios from "axios";
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://hikeme2-backend.herokuapp.com"
      : "http://localhost:8080",
  // withCredentials: true,
});

async function login(email, password) {
  const response = await api.post("/user/login", { email, password });
  // const userName = await api.get("/user/greetuser",{params:email})
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
  const response = await api.get("/trail/processquestionair", {
    params: userAnswers,
  });
  return response.data;
}

export { login, signUp, search };
