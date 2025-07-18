import axios from "axios";


const axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

axios.interceptors.request.use(function (config) {
    if (localStorage.getItem('access_token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/refresh-token`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('refresh_token')}`
                }
            }).then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
            }).catch((err) => {
                console.error("token fail: " + err);
            })
        } catch (err) {
            console.error(err);
        }
    }
);


export default axios;

