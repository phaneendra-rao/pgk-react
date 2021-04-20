import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// instance.defaults.headers.common['Content-Type'] = "application/json";
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

instance.interceptors.request.use(
    request => {
        // const token = localStorage.getItem('token');
        // if (token) {
        //     request.headers.common["Authorization"] = 'Bearer ' + token;            
        // }
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);


export default instance;