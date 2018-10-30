<template>
    <div class="person">
        <div class="wrap">
            <div class="left">头像</div>
            <div class="right"> <img src="../assets/nfshq.jpg" alt=""></div>
        </div>
        <div class="wrap">
            <div class="left">姓名</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">身份证</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">家庭住址</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">工作地址</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">民族</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">微信号</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">qq号</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">性别</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">最高学历</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">职称</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">薪资水平</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">入党时间</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">党费最后缴纳时间</div>
            <div class="right"> 111</div>
        </div>
        <div class="wrap">
            <div class="left">当前身份</div>
            <div class="right"> 111</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                preson:{},
                token:""
            }
        },
        methods:{
            personMessage(){
                this.token = localStorage.getItem("token")
                this.$axios.get("/user/userInfo.do").then(res=>{
                    console.log(res)
                })
            }
        },
        mounted(){
            this.personMessage()
        }
    }
</script>

<style scoped lang="scss">
    .person{
        margin-top: 50px;
        font-size: 15px;
    }
    .wrap{
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #bbb;
        .left{
            height: 50px;
            line-height: 50px;
            width: 5rem;
            margin-left: 8px;
        }
        .right{
            margin-top: 5px;
            width: 0.8rem;
            height:40px;
            // background: gold;
            margin-right: 8px;
            line-height: 40px;
            img{
                display: block;
                width: 0.8rem;
            }
        }
    }

</style>