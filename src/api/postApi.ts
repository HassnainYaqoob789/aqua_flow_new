import { get, post } from "./apiHelper";
import { ENDPOINTS } from "./endPoints";



// Customers
export const fetchCustomers = () => get(ENDPOINTS.customers);
export const createCustomer = (customerData) => post(ENDPOINTS.posts, customerData);
