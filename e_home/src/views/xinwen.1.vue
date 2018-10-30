<template>
    <div class="xinwen">
        <router-link :to="{path:'/xq/:query',query:{id:item.newsId}}" v-for="(item,index) in newsArr" v-bind:key="index">
        <!-- <router-link :to="{name:'xq',params:{id:item.newsId}}" v-for="(item,index) in newsArr" v-bind:key="index"> -->
            <div class="wrap" >
                <div class="left">
                    <img :src="item.pic" alt="" >
                </div>
                <div class="right">
                    <div class="top" >
                        {{item.title}}
                    </div>
                    <div class="bottom">
                        <div class="b-left">{{item.currentTime}}</div>
                        <div class="b-right"><img src="./eye.png" alt="">{{item.count}}</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newsArr:[]
            }
            
        },
        methods:{
            getNews(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=0").then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.newsArr = res.rows
                    }
                })
            }
        },
        mounted(){
            this.getNews()
        }
    }
</script>

<style scoped lang="scss">
    .xinwen{
        margin-top: 50px;
    }

    .xinwen{
        width: 100%;
        height:100px;
        // background: gold;
        
        box-sizing: border-box;
        a{
            text-decoration: none;
            color:#666;
        }
        .wrap{
            box-sizing: border-box;
            width:95%;
            margin: 0 auto;
            // background: skyblue;
            display: flex;
            justify-content: space-between;
            .left{
                padding-top: 10px;
                img{
                    display:block;
                    width: 80px;
                    height: 80px;
                }
            }
            .right{
                font-size: 15px;
                padding-top: 10px;
                margin-left: 15px;
                .top{
                    height: 50px;
                    overflow: hidden;
                }
                .bottom{
                    width: 5rem;
                    font-size: 13px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;

                    .b-left{
                        height: 15px;
                        line-height: 15px;                       
                    }
                    .b-right{
                        padding-top: 1px;
                        
                        img{
                            // display: block;
                            width: 15px;
                        }
                    }

                }
            }
        }
    }

</style>