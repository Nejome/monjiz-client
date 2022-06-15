import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

var auth = JSON.parse(localStorage.getItem('auth'));

export const authorizedApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        Authorization: `Bearer ${auth && auth.token}`
    }
})