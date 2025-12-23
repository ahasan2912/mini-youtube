import url from "../../utils/axiosInstance"

const getVideo = async (id) => {
    const response = await url.get(`/videos/${id}`);
    return response.data;
}

export default getVideo;
