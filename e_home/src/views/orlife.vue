<template>
    <div class="life">
        <div class="img">
            <img src="./banner1.png" alt="" style="display:block">
        </div>
        <div class="menu">
            <div class="row">
                <router-link :to="{path:'/political/8',query:{name:'8'}}" class="menu-item">
                    <div class="menu-img"><img src="./img/icon1.png" alt="" style="height:85px;"></div>
                    <div class="title">政治学习</div>
                </router-link>
                <router-link to="/thought" class="menu-item">
                    <div class="menu-img"><img src="./img/icon2.png" alt="" style="height:85px;"></div>
                    <div class="title">思想汇报</div>
                </router-link>
                <router-link to="/summary" class="menu-item">
                    <div class="menu-img"><img src="./img/icon3.png" alt="" style="height:85px;"></div>
                    <div class="title">心得总结</div>
                </router-link>
            </div>
            <div class="row">
                <router-link to="/democratic" class="menu-item" >
                    <div class="one" style="">
                        <div class="menu-img"><img src="./img/icon4.png" alt="" style="height:85px;"></div>
                        <div class="title">民主评议</div>
                    </div>
                </router-link>
                <router-link to="/" class="menu-item">
                    <div class="one">
                        <div class="menu-img"><img src="./img/icon5.png" alt="" style="height:85px;"></div>
                        <div class="title">流动党员<br/>找组织</div>
                    </div>
                </router-link>
                <div class="one" style="width:85px;height:113.8px">
                    <div class="menu-img"><img src="" alt="" style="height:85px;width:85px"></div>
                    <div class="title"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .menu{
        margin-top: 8px;
        .row{
            font-size: 15px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 25px;
            a{
                text-decoration: none;
                color:#999;
            }
            
        }
    }
    .life{
        margin-top: 50px;
    }
    .img{
        width: 100%;
        height: 186px;
        img{
            width: 100%;
            height: 186px;
        }
    }



</style>