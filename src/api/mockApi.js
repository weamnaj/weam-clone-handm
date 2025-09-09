import axios from "axios";

// Mock user database in localStorage
const USERS_KEY = "mock_users";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Axios mock interceptor
axios.interceptors.request.use(async (config) => {
  if (config.url === "/api/register" && config.method === "post") {
    const { name, email, password } = config.data;
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      return Promise.reject({ response: { data: { message: "User already exists" } } });
    }
    users.push({ name, email, password });
    setUsers(users);
    return { data: { message: "Registration successful" }, status: 200, statusText: "OK", config };
  }
  if (config.url === "/api/login" && config.method === "post") {
    const { email, password } = config.data;
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return Promise.reject({ response: { data: { message: "Invalid email or password" } } });
    }
    return { data: { token: "fake-jwt-token", user: { name: user.name, email: user.email } }, status: 200, statusText: "OK", config };
  }
  return config;
}, (error) => Promise.reject(error));

export default axios;
