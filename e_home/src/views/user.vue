<template>
    <div class="container user">
        <div class="img">
            <div class="img-wrap">
                <!-- <img src="./bt_bg.png" alt="" style=" "> -->
                <img :src="Info.header" alt="" style=" ">
            </div>
            <router-link to="/login">
                <div class="desc" v-if="!this.$store.state.userInfo.header">
                    您还没有登录，请登录
                </div>
            </router-link>
        </div>
        <div class="menu">
            <router-link to="/person" class="">
                <div class="function">
                    <div class="left">
                        <div class="icon"><img src="./person.png" alt="" style="width:32px;display:block"></div>
                        <div class="desc">个人信息</div>
                    </div>
                    <div class="right"><img src="./right.png" alt="" style="display:block"></div>
                </div>
            </router-link>
            <router-link to="/integral">
                <div class="function">
                    <div class="left">
                        <div class="icon"><img src="./lxjf.png" alt="" style="width:32px;display:block"></div>
                        <div class="desc">个人量化积分</div>
                    </div>
                    <div class="right"><img src="./right.png" alt="" style="display:block"></div>

                </div>
            </router-link>
            <router-link to="/password">
                <div class="function">
                    <div class="left">
                        <div class="icon"><img src="./xgmm.png" alt="" style="width:32px;display:block"></div>
                        <div class="desc">修改密码</div>
                    </div>
                    <div class="right"><img src="./right.png" alt="" style="display:block"></div>
                </div>
            </router-link>
            <router-link to="/payment">
                <div class="function">
                    <div class="left">
                        <div class="icon"><img src="./icon3.png" alt="" style="width:32px;display:block"></div>
                        <div class="desc">党费缴纳</div>
                    </div>
                    <div class="right"><a href=""><img src="./right.png" alt="" style="display:block"></a></div>
                </div>
            </router-link>
            <mt-button class="layout" type="danger" v-if="this.$store.state.userInfo.header" size="large" @click="loginOut">退出登录</mt-button>
            <!-- @click="logout" -->
        </div>
        
    </div>
</template>

<script>
    export default {

        data(){
            return{
                isShow:true,
                Info:{}
            }
        },
        

        methods:{
            getUserInfo(){
            //     // this.Info = {...this.$store.state.userInfo}
            //     // if(this.Info){
            //     //     this.isShow = false
            //     // }else{
            //     //     this.isShow=true
            //     // }
            
                 this.$axios.get(`/user/userInfo.do`).then(res=>{
                    console.log(res)
                    this.Info = res.data
                    if(this.Info){
                        this.isShow = false
                    }else{
                        this.isShow=true
                    }
                })
            },
            loginOut(){
                // Info = this.$store.state.userInfo
                this.$store.commit("HANDLE_USERINFO","")
                localStorage.setItem("token","")
                this.$router.push("/login")
            }
        },

        created(){
            this.getUserInfo()
        }
        
    }
</script>

<style scoped lang="scss">
*{
    margin: 0;padding: 0;
}
    .container{
        padding-top: 42px;
    }

    .img{
        position: absolute;
        left: 0;right: 0;
        width: 100%;
        height: 130px;
        background: #c7000a;
        box-sizing: border-box;
        padding: 20px;
        .img-wrap{
            width: 65px;
            height: 65px;
            margin: 0 auto;
            // background: gold;
            border-radius: 50%;
            background:url("./bt_bg.png");
            background-size: 100%;
            img{
                width: 65px;
                height: 65px;
                border-radius: 50%;
            }
        }
        .desc{
            width: 5rem;
            margin: 8px auto;
            font-size: 12px;
            text-align: center;
            color: white;
        }

    }
    .menu{
        margin-top: 130px;
        a{
            text-decoration: none;
        }
        
    }
    .function{
        
        border-bottom: 1px solid #999;
        width: 100%;
        height: 55px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        
        .left{
            width:5rem;
            // height: 50px;
            box-sizing: border-box;
            padding-top: 10px;
            display: flex;
            .icon{
                width: 1rem;
            }
            .desc{
                font-size: 16px;
                height: 45px;
                box-sizing: border-box;
                padding-top: 5px;
                color:#555;
            }
            
        }
        .right{
            margin-top:13px;
        }
    }
    .layout{
        margin-top: 20px;
    }
</style>