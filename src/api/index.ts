import axios from "axios";
import JwtService from "./jwt.service";


export const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

export function setToken() {
    API.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`;
}

export function clearToken() {
    delete API.defaults.headers.common["Authorization"];
}