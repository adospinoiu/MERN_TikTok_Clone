import axios from "axios";

const instance = axios.create({
    baseURL: "https://mern-tiktok-backend-ad.herokuapp.com/",
});

export default instance;