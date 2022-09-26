import axios from "axios";

// SET UP AN CONFIG FILE TO STORE ENVIRONMENT VARIABLES
axios.defaults.baseURL = "http://localhost:8080";

const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

const requests = {
  get: (url) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url, body) => axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url, body) => axios.put(url, body).then(sleep(1000)).then(responseBody),
  del: (url) => axios.delete(url).then(sleep(1000)).then(responseBody),
};

export const Products = {
  list: () => requests.get("/api/product"),

  create: (product) => requests.post("/api/product", product),

  update: (product, id) => requests.put(`/api/product/${id}`, product),

  delete: (id) => requests.del(`/api/product/${id}`),
};

export const Categories = {
  list: () => requests.get("/api/category"),

  create: (category) => {requests.post("/api/category", category); console.log("category"+ category)},

  update: (category, id) => requests.put(`/api/category/${id}`, category),

  delete: (id) => requests.del(`/api/category/${id}`),
};
