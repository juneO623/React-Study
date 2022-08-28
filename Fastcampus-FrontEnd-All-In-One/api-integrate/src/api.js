import axios from "axios";

export async function getUSers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response);
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users${id}`
  );
  console.log(response);
  return response.data;
}
