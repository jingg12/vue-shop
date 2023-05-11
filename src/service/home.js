import axios from "./config.js"

const getSwiperList = () => {
  return axios.get('/swiperList')
}

const getCategoryList = () => {
  return axios.get('/categoryList')
} 
const getProductList= (page) => {
  return axios.get('/productList',{params: { page: page}})
}

// const getcategoryData = () => {
//   return axios.get('/categoryData')
// }
export { getSwiperList , getCategoryList, getProductList}//, getCategoryList