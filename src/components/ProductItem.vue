<template>
    <div class="item">
        <!-- <div class="item" @click="gotoDetail(props.goods.id)"> -->
        <div>
            <img :src="product.imgSrc" :style="{ height: `${product.height}px` }" />
        </div>
        <p class="title">{{ product.title }}</p>
        <p class="desc">{{ product.desc }}</p>
        <p class="price">
            <sup>￥</sup>
            <text>{{ product.price }}</text>
            <sup>.00</sup>
        </p>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        default: {},
    },
});
</script>

<style lang="stylus" scoped>
.item
    background-color #fff
    margin-bottom .213333rem
    padding .213333rem
img
    width 100%
.title
    color black
.desc
    color gray
.price
    display flex
    margin-top .213333rem
    height .8rem
    color black
    text
        font-size .48rem
</style>
