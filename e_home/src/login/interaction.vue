<template>
    <div class="interation">
        <div class="wrap" v-for="(item,index) in list" v-bind:key="index">
            <div class="top">
                <div class="left">
                    <!-- <div class="img"><img src="../assets/img/icon_01.png" alt=""></div> -->
                    <div class="img"><img :src="item.header" alt=""></div>
                </div>
                <div class="center-wrap">
                    <div class="name">{{item.username}}</div>
                    <div class="time-wrap">
                        <div class="time"><i class="iconfont icon-shijian"></i>{{item.currentTime}}</div>
                        <div class="time"><i class="iconfont icon-gonggao"></i>公告</div>
                    </div>

                </div>
                <div class="right">党员互动</div>
            </div>
            
            <div class="center">{{item.content}}</div>
            
                <div :to="{name:'reply',params:{id:item.forumId}}" @click="handleClick(index)">
                <!-- <router-link to="/reply"> -->
                    <div class="bottom"><i class="iconfont icon-xiaoxi"></i>回复</div>
                </div>
            
            
        </div>

        <div class="add" @click="Show">
            <div class="iconfont icon-zengjia"></div>
        </div>

        <div class="form" v-show="isShow" >
            <div @click="Close" class="top-wrap"></div>
            <div class="form-wrap">
                <!-- <textarea type="text" name="desc" id=""> -->
                    <textarea name="desc" id="" cols="30" rows="10" v-model="form.content"></textarea>
                <div class="btn">
                    <mt-button class="sure" type="danger" size="small" @click.prevent="publish">发布</mt-button>
                    <mt-button class="back" size="small" @click.prevent="Close">取消</mt-button>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                list:[],
                isShow:false,
                form:{
                    type:1,
                    content:""

                }
                
            }
        },
        methods:{
            getList(){
                this.$axios.get(`/forum/forumList.do?page=1&rows=10&type=0&cates=0`).then(res=>{
                    console.log(res)
                    this.list = res.rows
                })
            },

            Close(){
                this.isShow=false
            },

            Show(){
                this.isShow=true
            },

            publish(){
                this.$axios.post(`/forum/saveForum.do`,this.form).then(res=>{
                    console.log("desc")
                    this.isShow=false
                    this.$router.push("/interaction")
                })
            },
            handleClick(index){
                this.$store.commit("REPLY_USER",this.list[index])
                const id=this.list[index].forumId
                this.$router.push("/reply/"+id)
            }
        },
        mounted(){
            this.getList()
        }
    }
</script>

<style scoped lang="scss">
    .interation{
        margin-top: 50px;
        overflow: hidden;
    }
    .wrap{
        width: 90%;
        height: 100px;
        margin: 15px auto;
            a{
                text-decoration: none;
            }
        .top{
            display: flex;
            justify-content: space-around;
            .left{
                display: flex;
                .img{
                    width: 33px;
                    height: 33px;
                    img{
                        display: block;
                        width: 33px;
                        height: 33px;
                    }
                }
            }
            .center-wrap{
                width: 200px;
                .name{
                    font-size: 13px;
                    height: 20px;
                    width: 100px;
                }
                .time-wrap{
                    display: flex;
                    height: 16px;
                    .time{
                        height: 16px;
                        font-size: 10px;
                        margin-left: 5px;
                        i{
                            width: 5px;
                            height: 5px;
                            margin-right: 5px;
                        }
                    }
                }
                
            }
            .right{
                font-size: 13px;
                color: red;
                line-height: 26px;
                text-align: center;
                border:1px solid red;
                width: 66px;
                height: 26px;
                border-radius: 18px;
                margin-left: 30px;
            }
        }
        .center{
            font-size: 15px;
            height: 50px;
            width: 100%;
            line-height: 50px;
            overflow: hidden;
        }
        .bottom{
            font-size: 13px;
            i{
                margin-right: 5px;
            }
            color: #888;

            text-decoration: none;
            margin-left: 280px;
        }
    }
    .add{
        
        width: 60px;
        height: 60px;
        position: fixed;
        z-index: 8;
        bottom: 85px;
        right: 10px;
        
        
        .iconfont{
            font-size: 66px;
            color: red;
            // background: red;
        }
    }
    .form{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        z-index:123;
        .top-wrap{
            width: 100%;
            height: 500px;
        }
        .form-wrap{
            position: fixed;
            bottom: 0;
            z-index: 125;
            width: 100%;
            height: 166px;
            z-index: 998;
            background: white;
            textarea{
                width: 98%;
                height: 100px;
            }
            .btn{
                font-size: 13px;
                color: white;
                border-radius: 6px;
                margin-top: 5px;
                .sure{
                    margin-left: 10px;
                }
                .back{
                    margin-left: 250px;
                }
            }
        }
    }
</style>