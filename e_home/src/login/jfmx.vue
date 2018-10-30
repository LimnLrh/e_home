<template>
    <div class="jfmx">
        <div class="center" v-for="(item,index) in jfmx" v-bind:key="index">
            <div class="left">
                <div class="top">{{item.typeName}}</div>
                <div class="botton">{{item.timeFormat}}</div>
            </div>
            <div class="right">
                +{{item.singleDesc}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                jfmx:[]
            }
        },
        methods:{
            getJf(){
                this.$axios.get(`/integral/integralList.do?page=1&rows=10`).then(res=>{
                    console.log(res)
                    this.jfmx = res.rows
                    console.log(this.jfmx)
                    
                })
            }
        },
        mounted(){
            this.getJf()
        }
    }
</script>

<style scoped lang="scss"> 
    .jfmx{
        margin-top: 50px;
        width: 100%;
        overflow: hidden;
    }
    .center{
        width: 340px;
        height: 80px;
        margin: 15px auto;
        // background: skyblue;
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        .left{
            margin-top: 10px;
            .top{
                font-size: 20px;
                width: 200px;
                height: 50px;
                line-height: 50px;
                // background: gold;
            }
            .botton{
                font-size: 13px;
            }
        }
        .right{
            font-size: 18px;
            color:red;
            width: 50px;
            height: 80px;
            line-height: 80px;
        }
    }
</style>