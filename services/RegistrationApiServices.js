import axios from "axios";
const BASE_URL = "http://localhost:9800/registation";

export async function saveClient(student) {
  return axios.post(BASE_URL, student); //pass URL and Req body and it will return promise, directly return promise
}

export async function getAllClientsFromServer() {
  return axios.get(BASE_URL); //return Promise in which we get response
}
