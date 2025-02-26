import { apiClient } from "../config/apiConfig";

export async function getHomePosts() {
    return (await apiClient.get("/posts"))?.data;
}