import axios from "axios";

const BASE_API = "https://89ce7448-5ff3-4b6a-b2d3-bb9cde3f72b8.mock.pstmn.io"

const service = axios.create({
    baseURL: BASE_API,
    timeout: 6000
})

service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.get['Content-Type'] = 'application/json'

export default service