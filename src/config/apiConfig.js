import axios from "axios";
import { API_BASE_URL } from "./envVariables";


export const apiClient = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
});
