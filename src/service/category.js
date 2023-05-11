import axios from "./config.js"

const getCategoryData = () => {
  return axios.get('/categoryData')
}

export { getCategoryData } 