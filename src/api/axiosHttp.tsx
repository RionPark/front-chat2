import axios from "axios";

const url = `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}`;
export const axiosHttp = axios.create({
    baseURL: url
}); 

export const axiosAuth =  axios.create({
    baseURL: url,
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    }
});

axiosAuth.interceptors.request.use(
    (config:any) => {
        const token = localStorage.getItem('token');
        if(!token){
            return Promise.reject('login');
        }
        config.headers.Authorization = token;
        return config;
    },
    (err:any) => {
        return Promise.reject(err);
    }
)