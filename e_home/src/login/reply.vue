<template>
    <div class="reply">
        <div class="wrap">
            <div class="top">
                <div class="left">
                    <!-- <div class="img"><img src="../assets/img/icon_01.png" alt=""></div> -->
                    <div class="img"><img :src="first.header" alt=""></div>
                </div>
                <div class="center-wrap">
                    <div class="name">{{first.username}}</div>
                    <div class="time-wrap">
                        <div class="time"><i class="iconfont icon-shijian"></i>{{first.currentTime}}</div>
                    </div>
                </div>
            </div>
            <div class="center">123</div>
        </div>

        <div class="wrap" v-for="(item,index) in List" v-bind:key="index">
            <div class="top">
                <div class="left">
                    <!-- <div class="img"><img src="../assets/img/icon_01.png" alt=""></div> -->
                    <div class="img"><img :src="item.header" alt=""></div>
                </div>
                <div class="center-wrap">
                    <div class="name">123</div>
                    <div class="time-wrap">
                        <div class="time"><i class="iconfont icon-shijian"></i>{{item.timeFormat}}</div>
                    </div>
                </div>
            </div>
            <div class="center">{{item.comment}}</div>
        </div>

        <div class="bottom-wrap">
            <!-- <div class="wrap"> -->
                <input type="text" name="" id="" v-model="form.comment" placeholder="评论内容">
                <mt-button type="danger" size="normal" class="btn" @click="addComment">评论</mt-button>
            <!-- </div> -->
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                List:[],
                first:{},
                form:{
                    comment:"",
                    forum_id:this.$route.params.id
                }
            }
        },
        methods:{

            getList(){
                const id=this.$route.params.id
                console.log(id)
                this.first = this.$store.state.reply
                console.log(this.first)
                
                this.$axios.get(`/forum/forumCommentList.do?page=1&rows=10&forum_id=${id}`).then(res=>{
                    console.log(res)
                    this.List = res.rows
                })
            },
            
            addComment(){
                this.$axios.post(`/forum/addComment.do`,this.form).then(res=>{
                    window.location.reload();
                })
            }
        },
        mounted () {
            this.getList()
            
        }
        
    }
</script>

<style scoped lang="scss">
    .reply{
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
            justify-content: space-between;
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
                margin-right: 80px;
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
                        font-size: 12px;
                        margin-left: 5px;
                        i{
                            width: 5px;
                            height: 5px;
                            margin-right: 5px;
                            font-size: 10px;
                        }
                    }
                }
                
            }
        }
        .center{
            font-size: 15px;
            height: 50px;
            width: 100%;
            line-height: 50px;
            overflow: hidden;
        }
    }

// 192.168.43.136

    .bottom-wrap{
        width: 100%;
        height: 50px;
        background: skyblue;
        position: fixed;
        justify-content: space-around;
        bottom: 0;
        line-height: 0;
        input{
            // position: fixed;
            // left: 5px;
            // bottom: 8px;
            width: 300px;
            height: 25px;
            margin-top: 15px;
            margin-left: 2px;
            border: 1px solid red;
            border-radius: 3px;
            outline: none;
        }
        .btn{
            font-size: 13px;
            // position: fixed;
            // right:15px;
            // bottom: 5px;
            width: 50px;
            height: 30px;
        }
    }

</style>