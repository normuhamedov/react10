import { apiClient } from "../config/apiConfig";

export async function login(username, password) {
    const response = await apiClient.post("/auth/login", { username, password });
    return response.data;
}
