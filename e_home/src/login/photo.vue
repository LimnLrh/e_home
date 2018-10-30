<template>
    <div class="photo">
        <!-- <router-link to="/">

        </router-link> -->
        <div class="wrap">
            <div class="all">
                <router-link :to="{name:'pdetails',query:{id:item.newsId}}" v-for="(item,index) in getPhoto" v-bind:key="index">
                    <div class="one" >
                        <!-- <router-link to="/pdetails"> -->
                            <div class="img"><img :src="item.pic" alt="" ></div>
                            <div class="desc">{{item.title}}</div>
                    </div>
                </router-link>
                <!-- <div class="one" >
                    <div class="img"><img :src="item.pic" alt="" ></div>
                    <div class="desc"></div>
                </div> -->
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
// v-for="(item,index) in getPhoto" v-bind:key="index"
// item.pic
// {{item.title}}
    export default {
        data(){
            return{
                getPhoto:[]
            }
        },
        methods:{
            getphoto(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=7").then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.getPhoto = res.rows
                    }
                })
            }
        },
        mounted(){
            this.getphoto()
            
            // let config = {
            //     headers: {
            //         'token': 'token'
            //     }
            // }
            // axios.post('', data, config)
        }
        
    }
</script>

<style scoped lang="scss">
    .photo{
        margin-top: 60px;
        overflow: hidden;
    }
    .all{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .one{
            width: 180px;
            height: 180px;
            .img{
                width: 155px;
                height: 116px;
                // background: gold;
                margin: 0 auto;
                img{
                    display: block;
                    width: 155px;
                    height: 116px;
                }
            }
            .desc{
                width: 155px;
                height: 40px;
                margin: 0 auto;
                font-size: 12px;
                overflow: hidden;
            }
        }

    }


</style>