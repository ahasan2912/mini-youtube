import axios from "axios";

const url = axios.create({
    baseURL: 'http://localhost:9000',
});

export default url;