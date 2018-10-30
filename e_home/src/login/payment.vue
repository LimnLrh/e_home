<template>
    <div class="payment">
        <div class="header">
            <div class="desc">请选择支付方式</div>
        </div>
        <div class="wrap" @click="ShowimgWx">
            <div class="zhf">
                <div class="left"></div>
                <div class="center">微信</div>
                <div class="right"></div>
            </div>
        </div>
        <div class="wrap" @click="ShowimgZhfb">
            <div class="zhf">
                <div class="leftz"></div>
                <div class="center">支付宝</div>
                <div class="right"></div>
            </div>
        </div>

        <div class="allof" v-show="ShowWx" @click="Close">
            <div class="all"  >
                <div class="desc">微信支付</div>
                <img src="../assets/img/wechat.png" alt="" style="display:block width:300px;height:300px;">
            </div>
        </div>

        <div class="allof" v-show="ShowZhfb" @click="Close">
            <div class="all"  >
                <div class="desc">支付宝支付</div>
                <img src="../assets/img/alipay.png" alt="" style="display:block width:300px;height:300px;">
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ShowWx:false,
                ShowZhfb:false
            }
            
        },

        methods:{
            ShowimgWx(){
                this.ShowWx=true
            },
            ShowimgZhfb(){
                this.ShowZhfb=true
            },
            Close(){
                this.ShowWx=false
                this.ShowZhfb=false
            }
        }
    }
</script>

<style scoped lang="scss">
    .payment{
        margin-top: 50px;
    }
    .header{
        width: 100%;
        font-size: 15px;
        .desc{
            width: 98%;
            height: 50px;
            line-height: 50px;
        }
    }
    .wrap{
        width: 100%;
        height: 62px;
        // background: gold;
        overflow: hidden;
        
        .zhf{
            width: 96%;
            height: 62px;
            // background: skyblue;
            margin: 0 auto;
            overflow: hidden;
            display: flex;
            .left{
                margin-top: 6px;
                height: 50px;
                width: 50px;
                background:url("../assets/img/wx.png") no-repeat;
                background-size: 100%
            }
            .leftz{
                margin-top: 6px;
                height: 50px;
                width: 50px;
                background:url("../assets/img/zhfb.png") no-repeat;
                background-size: 100%
            }
            .center{
                font-size: 18px;
                line-height: 62px;
                margin-left: 15px;
                width: 3rem;
            }
            .right{
                width: 10px;
                height: 20px;
                background: url("../assets/img/right.png") no-repeat;
                background-size: 100%;
                margin-top: 26px;
                margin-left: 2.5rem;
            }
        }
    }
    
    .allof{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 123;
        .all{
        background: #fff;
        width: 300px;
        height: 330px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -165px;
        margin-left: -150px;
        z-index: 998;
        .desc{
            height: 30px;
            line-height: 30px;
            width: 300px;
            font-size: 25px;
            text-align: center;
        }
    }
    }
    
</style>