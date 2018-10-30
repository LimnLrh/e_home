<template>
    <div class="integral">
        <div class="img">
            {{jifen.totalScore}}
        </div>
        <a href="">
            <router-link to="/jfmx">
                <div class="header-bottom">
                    <div class="left"></div>
                    <div class="desc">积分明细</div>
                    <div class="right"></div>
                </div>
            </router-link>
        </a>
        
        <div class="menu">
            <div class="center">
                <div class="left">积分规则</div>
                <div class="right"></div>
            </div>
        </div>
        <div class="menu0">
            <div class="center">
                <div class="left">登录app</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">完善个人信息</div>
                <div class="right">2</div>
            </div>
            <div class="center">
                <div class="left">查看积分</div>
                <div class="right">1</div>
            </div>
            <div class="center">
                <div class="left">按时缴纳党费</div>
                <div class="right">10</div>
            </div>
            <div class="center">
                <div class="left">查看通知</div>
                <div class="right">2</div>
            </div>
            <div class="center">
                <div class="left">了解学院工作动态</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">完善个人信息</div>
                <div class="right">2</div>
            </div>
            <div class="center">
                <div class="left">上交思想汇报经审核通过</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">主动学习相关文件</div>
                <div class="right">10</div>
            </div>
            <div class="center">
                <div class="left">认真撰写心得总结并上交，经审核通过</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">提交个人总结，并参与评议</div>
                <div class="right">2</div>
            </div>
            <div class="center">
                <div class="left">积极参与活动</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">学习党建知识</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">学习党史</div>
                <div class="right">10</div>
            </div>
            <div class="center">
                <div class="left">创先争优事迹</div>
                <div class="right">10</div>
            </div>
            <div class="center">
                <div class="left">学党章，学习近平总书记系列讲话</div>
                <div class="right">10</div>
            </div>
            <div class="center">
                <div class="left">用镜头记录两学一做过程中令人感动的人和事</div>
                <div class="right">3</div>
            </div>
            <div class="center">
                <div class="left">关注并积极参与特色活动</div>
                <div class="right">5</div>
            </div>
            <div class="center">
                <div class="left">制度化，常态化建设</div>
                <div class="right">5</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                jifen:{}
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/user/userInfo.do`).then(res=>{
                    this.jifen = res.data
                })
            }
        },
        
        mounted () {
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    .integral{
        margin-top: 49px;
        a{
            text-decoration: none;
        }
    }
    .img{
        width: 100%;
        height: 145px;
        background: url("../assets/img/jifen.png") no-repeat;
        background-size: 100%;
        font-size: 18px;
        line-height: 145px;
        text-align: center;
    }

    .header-bottom{
        width: 100%;
        height: 55px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        border-bottom: 1px solid #aaa;
        .left{
            width: 32px;
            height: 32px;
            margin-top: 11px;
            margin-left: 8px;
            background: url("../assets/img/lxjf.png") no-repeat;
            background-size: 100%;
        }
        .desc{
            font-size: 20px;
            color: #888;
            text-decoration: none;
            line-height: 55px;
            margin-left: 18px;
           
        }
        .right{
            width: 10px;
            height: 20px;
            background: url("../assets/img/right.png") no-repeat;
            background-size: 100%;
            margin-top: 20px;
            margin-left: 4.3rem;
        }
    }
    .menu{
        width: 100%;
        height: 35px;
        // background: gold;
        .center{
            width: 95%;
            height: 35px;
            margin: 0 auto;
            // background: skyblue;
            .left{
                font-size: 16px;
                line-height: 35px;
                color:#666;
            }
            display: flex;
            justify-content: space-between;
            .right{
                margin: 8px 8px;
                height: 18px;
                width: 18px;
                background: url("../assets/img/wenhao.png") no-repeat;
                background-size: 100%;
            }
        }
    }
    .menu0{
        width: 100%;
        height: 35px;
        // background: gold;
        .center{
            width: 95%;
            height: 35px;
            margin: 0 auto;
            // background: skyblue;
            font-size: 13px;
            .left{
                // font-size: 13px;
                line-height: 35px;
                color:#888;
            }
            display: flex;
            justify-content: space-between;
            .right{
                margin: 8px 8px;
                height: 18px;
                width: 18px;
                color: red;
                text-align: center;
                line-height: 18px;
            }
        }
    }
</style>