import axios from "axios";


export const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

export function setToken(jwt: string) {
    API.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearToken() {
    delete API.defaults.headers.common["Authorization"];
}