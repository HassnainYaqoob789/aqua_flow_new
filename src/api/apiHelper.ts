import axios from "axios";
import { BASE_URL } from "./endPoints";

export const get = async (endpoint) => {
try {
const res = await axios.get(`${BASE_URL}${endpoint}`);
return res.data;
} catch (err) {
console.error(`GET ${endpoint} failed:`, err.message);
throw err;
}
};

export const post = async (endpoint, data) => {
try {
const res = await axios.post(`${BASE_URL}${endpoint}`, data);
return res.data;
} catch (err) {
console.error(`POST ${endpoint} failed:`, err.message);
throw err;
}
};
