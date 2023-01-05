import  Axios  from 'axios';

export const getAxios=()=>{

    return Axios.create({
        baseURL:"http://localhost:5000/api/",
        headers: {
            "x-auth-token": localStorage.getItem("jwtToken")
        }
    });
};