import http from "./../httpService"
import config from "./../config.json"

export const loginAdmin = user => {
    const url = `${config.localapi}auth/employee/login`
    return http.post(url,JSON.stringify(user))
}