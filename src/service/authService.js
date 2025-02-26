import { apiClient } from "../config/apiConfig.js";

export async function register(body) {
    return (await apiClient.post("/auth/register", body))?.data;
}