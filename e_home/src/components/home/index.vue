<template>
    <div>
        <div class="header">
            <div class="auto">
                <div class="left">
                    <img src="./logohhxg.png" alt="">
                </div>
                
                <div class="right">
                    <a href=""><router-link to="/login" v-if="!this.$store.state.userInfo.username">登录</router-link></a>
                </div>
                
            </div>
        </div>

        <div class="swiper" >
            <mt-swipe :auto="3000" >
                <mt-swipe-item v-for="(item,index) in swiperArr" :key="index">
                    <div class="wrap">
                        <router-link to="/">
                            <img :src="item.imgUrl" alt="" style="display:block;width:100%;height:4.2rem">
                            <div class="title" v-text="item.title"></div>
                        </router-link>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="main-menu">
            <div class="row">
                <router-link :to="{path:'/xinwen/0',query:{name:'0'}}" class="menu-item">
                    <div>
                        <img src="./img/icon_01.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        信工新闻眼
                    </div>
                </router-link>
                <router-link to="/orlife" class="menu-item">
                    <div>
                        <img src="./img/icon_03.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        掌上组织生活
                    </div>
                </router-link>
                <router-link to="/interaction" class="menu-item">
                    <div>
                        <img src="./img/icon_05.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        党员云互动
                    </div>
                </router-link>
            </div>
            <div class="row">
                <router-link :to="{path:'/oneclick/3',query:{name:'3'}}" class="menu-item">
                    <div>
                        <img src="./img/icon_05.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        党建一点通
                    </div>
                </router-link>
                <router-link :to="{path:'/identity/5',query:{name:'5'}}" class="menu-item">
                    <div>
                        <img src="./img/icon_06.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        党员亮身份
                    </div>
                </router-link>
                <router-link to="/today" class="menu-item">
                    <div>
                        <img src="./img/icon_02.png" alt="">
                    </div>
                    <div class="menu-btn-title">
                        党史上的今天
                    </div>
                </router-link>
            </div>
        </div>
        <!-- 菜单结束 -->
        <div class="banner">
            <img src="./img/banner02.png" alt="">
        </div>

        <div class="footer-menu">
            <div class="menu-left">
            </div>
            <div class="menu-right">
                <div class="row">
                    <router-link :to="{path:'/study/6',query:{name:'6'}}"></router-link>
                    <router-link to="/photo"></router-link>
                </div>
                <div class="row">
                    <router-link :to="{path:'/system/4',query:{name:'4'}}"></router-link>
                    <router-link :to="{path:'/activity/1',query:{name:'1'}}"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                swiperArr:[],
            }
        },

        methods:{
            getswiper(){
                this.$axios.get("/carousel/carouselList.do?type=0").then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.swiperArr = res.rows
                        console.log(this.swiperArr)
                    }
                })
            }
        },
        mounted(){
            this.getswiper()
        }


//     methods: {
//     getSwiper(){
//         this.$axios.get('/carousel/carouselList.do?type=0').then(res=>{
//             console.log(res)
//             // if (res.code == 1) {
//             //     this.swiperList = res.rows
//             //     // console.log( this.swiperList)
//             // }
            
//         })
//     }
// },
// mounted () {
//     this.getSwiper()
// }

        
    }
</script>

<style scoped lang="scss">
@import "../../style/home.scss"
</style>