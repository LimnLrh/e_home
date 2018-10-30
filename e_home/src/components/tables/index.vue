<template>
    <div class="tabs">
        <router-link to="/" class="tab-item" :class="{active: $route.name === 'home'}">
            <i class="iconfont icon-dangwugongkai"></i>
            <div class="tab-title"> 
                首页
            </div>
        </router-link>
        <router-link :to="{path:'/message/2',query:{name:'2'}}" class="tab-item" :class="{active: $route.name === 'message'}">
            <i class="iconfont icon-xiaoxi"></i>
            <div class="tab-title">
                通知早知道
            </div>
        </router-link>
        <router-link to="/user" class="tab-item" :class="{active: $route.name === 'user'}">
            <i class="iconfont icon-04f"></i>
            <div class="tab-title">
                我的
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .tabs{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        
        background: #fafbfc;
        border-top: 1px solid #f1f1f1;
        // text-decoration: none;
        display: flex;
        align-items: center;
        height: 1.12rem;

        .tab-item{
            padding-top: 3px;
            flex: 1;
            text-align: center;
            text-decoration: none;
            font-size: 15px;
            color: #aaaaaa;

            .iconfont{
                font-size: 24px;
            }
        }
        .active{
            border-top: 2px solid #c7000a;
            color: #c7000a;
        }
    }
</style>