import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers["x-auth-token"] = localStorage.getItem("jwtToken");

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است", {
            position: "top-right",
            closeOnClick: true
        });
    }
    console.log(expectedErrors);
    return Promise.reject(error);
});

export default{
    get : axios.get,
    post : axios.post,
    put : axios.put,
    delete : axios.delete
}