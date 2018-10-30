<template>
    <div class="login container">
        <div class="wrap">
            <div class="logo-wrap">
                <img src="./logo.png" alt="" style="width:4rem">
            </div>
            <form class="form" @submit.prevent>
                <div class="input-wrap">
                    <input type="text" placeholder="身份证号" v-model="formData.id_card" >
                </div>
                <div class="input-wrap">
                    <input type="password" placeholder="密码" v-model="formData.password" >
                </div>
                <div class="input-wrap " style="margin-top:40px;">
                    <mt-button size="large" @click="login">登录</mt-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        data(){
            return{
                formData:{
                    id_card:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                this.$axios.post("/user/userLogin.do",this.formData).then(res=>{
                    console.log(res)
                    
                    // localStorage.setItem("token",res.token)
                    window.localStorage.setItem('token', res.token)//把res.token存储到token里边

                    this.$store.commit('HANDLE_USERINFO', res.data)

                    this.$router.push("/user")
                    
                    console.log(this.$store.state.userInfo)
                })
            }

        }
    }
</script>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}
.mint-button{
    background: #e3574f;
    font-size:14px;
    color:white;
}
@import "../style/login.scss";
.container{
    padding-top: 42px;
}

</style>