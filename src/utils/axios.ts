import Axios, { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://5f3e441413a9640016a6887c.mockapi.io'

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(
  (config) => {
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
