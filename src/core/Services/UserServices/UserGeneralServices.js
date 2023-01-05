import http from './../httpService'
import config from './../config.json'

export const registerUser = user => {
    const url = `${config.localapi}auth/register`
    return http.post(url,JSON.stringify(user))
}
export const loginUser = user => {
    const url = `${config.localapi}auth/login`
    return http.post(url,JSON.stringify(user))
}
export const forgetPassword = user => {
    const url = `${config.localapi}forgetpassword`
    return http.post(url,JSON.stringify(user))
}
export const changePassword = (passData,id) => {
    const url = `${config.localapi}resetPassword/${id}`
    return http.post(url,JSON.stringify(passData))
}