<template>
    <div class="tought">
        <div class="img"><img src="../assets/img/reviewing.png" alt="" ></div>
        <div class="desc">正在审核中</div>
        <div class="btn"><mt-button size="large" type="danger">关闭</mt-button></div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.tought{
    margin-top: 50px;
    overflow: hidden;
    .img{
        width: 92px;
        height: 92px;
        margin:80px auto 15px;
        img{
            display: block;
            width: 92px;
            height: 92px;
        }
    }
    .desc{
        font-size: 15px;
        width: 100%;
        text-align: center;
        color:#888;
        margin-top: 30px;
        margin-bottom: 80px;
    }
    .btn{
        
        width: 300px;
        height: 41px;
        margin: 0 auto;
    }
}
</style>