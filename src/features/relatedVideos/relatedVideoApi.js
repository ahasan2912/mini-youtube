import url from "../../utils/axiosInstance";

export const getRelatedVideo = async ({ tags, currentId }) => {
    const limit = 5;
    let queryString = tags.length > 0 ?
     tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${currentId}&_limit=${limit}`
        : `&id_ne=${currentId}&_limit=${limit}`
    const response = await url.get(`/videos?${queryString}`);
    return response.data;
}


//url: http://localhost:9000/videos
//RelatedVideo url
//url -> http://localhost:9000/videos?tags_like=react&id_ne=1&_limit=5