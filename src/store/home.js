import { defineStore } from 'pinia'
// 每个路由级别组件都有独立的store 模块
import { getSwiperList, getCategoryList, getProductList} from '@/service/home.js'//, getVideosList
// 每个子仓库都是一个函数, use 开头, store结尾,  hooks
// 界面工程师
export const useHomeStore = defineStore('home', {
    state: () => ({
        // 响应式 
        swiperList: [],
        categoryList: [],
        productList: [],
        leftProducts: [],
        rightProducts: [],
        isOver: false
    }),
    actions: {
        // 修改 也在store 里面 数据管理的闭环? 
        async getSwiperList() {
            const { result } = await getSwiperList();
            // console.log(result);
            this.swiperList = result
        },
        async getCategoryList() {
            const { result } = await getCategoryList();
            // console.log(result);
            this.categoryList = result 
        },
        // async getProductList() {
        //     const { result } = await getProductList();
        //     // console.log(result);
        //     this.productList = result 
        // },
        // 分页处理数据 一次只请求一页数据
        async getProductList(page) {
            const { result } = await getProductList(page) 
            if (!result) {
                this.isOver = true
            }
            this.productList = result
        },
        getProductItems() {
            const heights = [0, 0];
            const getMinHeight = () => { // 拿到高度最短的一行
                let minHeight = Math.min(...heights);
                return heights.indexOf(minHeight)
            };
            for (let i = 0; i < this.productList.length; i++) {
                let minHeightIndex = getMinHeight()
                if (minHeightIndex === 0) {
                    this.leftProducts.push(this.productList[i])
                } else {
                    this.rightProducts.push(this.productList[i])
                }
                heights[minHeightIndex] += this.productList[i].height // 总是在最短的一行添加商品
            }
        }
    }
})
