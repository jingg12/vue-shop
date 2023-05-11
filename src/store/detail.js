import { defineStore } from 'pinia'
import {  getDetailData } from '@/service/detail.js'

export const useDetailStore = defineStore('detail', {
    state: () =>({
      swiperList: [],
      description: {}
    }),
    actions:  {
        async getDetailData() {
            const { result } = await getDetailData();
            this.detailData = result;
            this.swiperList = result.swiperList;
            this.description = result.description
        }
    }
})