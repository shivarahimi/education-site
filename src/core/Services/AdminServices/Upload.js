import http from './../httpService'
import config from './../config.json'

export const Upload = data => {
    return http.post(`${config.localapi}upload/image`,data)
}