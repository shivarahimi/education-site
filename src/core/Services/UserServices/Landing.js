import http from './../httpService'
import config from './../config.json'


export const getAllCourse = () => {
    const url = `${config.localapi}course/getall`
    return http.get(url)
}
export const getCoursesByid = (courseId) => {
    const url = `${config.localapi}course/${courseId}`
    return http.get(url)
}
export const getAllLesson = () => {
    const url = `${config.localapi}lesson`
    return http.get(url)
}
export const getAllNews = () => {
    const url = `${config.localapi}news`
    return http.get(url)
}
export const getNewsByid = (newsId) => {
    const url = `${config.localapi}news/${newsId}`
    return http.get(url)
}
