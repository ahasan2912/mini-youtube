import url from "../../utils/axiosInstance";

const getTags = async () => {
    const response = await url.get('/tags');
    return response.data;
}

export default getTags;