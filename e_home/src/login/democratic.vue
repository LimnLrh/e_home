<template>
    <div class="top">
        <div class="center">
            
            <router-link to="/summarize"><div class="top"><mt-button type="danger" size="large">个人总结</mt-button></div></router-link>
            <router-link to="/democracy"><div class="bottom"><mt-button type="danger" size="large">民主评议</mt-button></div></router-link>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .top{
        margin-top: 50px;
        width: 100%;
        overflow: hidden;
        .center{
            width: 50%;
            margin: 180px auto;
            a{
                text-decoration: none;
            }
            
            .top{
                margin-bottom: 30px;
            }
        }
    }
</style>