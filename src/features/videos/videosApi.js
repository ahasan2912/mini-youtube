import url from "../../utils/axiosInstance";

export const getVideos = async () => {
    const response = await url.get('/videos');
    return response.data;
}