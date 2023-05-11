import { defineStore } from 'pinia'
import {  getCategoryData } from '@/service/category.js'

export const useCategoryStore = defineStore('category', {
    state: () =>({
        // categoryData:[],
        firstList:[]
    }),
    actions:  {
        async getCategoryData() {
            const { result } = await getCategoryData();
            this.categoryData = result;
            this.firstList = result.firstList;
        }
    }
})
