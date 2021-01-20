import axios from "axios";

export default function apiRequest(url: string) {
    return axios.get(url); // The simple API request with special url from attribute
}
