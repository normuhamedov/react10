import { apiClient } from "../config/apiConfig";

export async function getComments() {
    return (await apiClient.get("/comments"))?.data;
}