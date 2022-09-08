import axios from 'axios'


axios.defaults.baseURL = "http://localhost:8080";

const responseBody = (response) => response.data;

const sleep = (ms) => (response) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url, body) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url, body) =>
    axios.put(url, body).then(sleep(1000)).then(responseBody),
  del: (url) => axios.delete(url).then(sleep(1000)).then(responseBody),
  
};

export const Products = {
    list: () => requests.get("/api/product"),
  
    create: (product) => requests.post("/api/product", product),
  
    update: (product,id) => requests.put(`/api/product/${id}`, product),
  
    delete: (id) => requests.del(`/api/product/${id}`),
  };