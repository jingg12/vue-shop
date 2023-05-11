<template>
    <div>
        <text class="title">热门机型</text>
        <div class="container">
            <div class="item" v-for="(item, index) in items" :key="index">
            {{ item }}
        </div>
    </div>
    </div>
</template>

<script setup>
const items = [ "数据线", "充电宝", "小米音箱", "手机配件","iPone13", "华为p40","智能手表","苹果耳机","吸层器"]
</script>

<style lang="stylus" scoped>
.title
    line-height 3
    margin .533333rem
    font-size .426667rem
    font-weight bold
    color black
.container
    width 90%
    display flex
    flex-wrap wrap
    margin-left .293333rem
    .item
        width 1.6rem 
        line-height 2.5
        text-align center
        border-radius .8rem
        margin .16rem 
        background rgb(245, 245, 245)    
</style>