import axios from "axios";

const BASE_API = "http://localhost.com"

const service = axios.create({
    baseURL: BASE_API,
    timeout: 6000
})

service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.get['Content-Type'] = 'application/json'

export default service