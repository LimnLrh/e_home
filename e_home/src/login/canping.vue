<template>
    <div class="cp">
        <div class="wrap" v-for="(item,index) in List" v-bind:key="index">
            <div class="left">
                <div class="img">
                    <img :src="item.header" alt="">
                </div>
                <div class="name">{{item.username}}</div>
            </div>
            <div class="right">{{item.branchName}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                List:"",
                parameter:{
                    select_branch:"",
                    user_id:"",
                    page:1,
                    rows:10,
                }

            }

        },
        methods:{
            getAll(){
                const id = this.$route.query.id
                this.parameter.select_branch = id
                const token = localStorage.getItem("token")
                this.parameter.user_id = token
                this.$axios.get(`/nationComment/userList.do`,this.parameter).then(res=>{
                    this.List = res.rows
                    console.log(this.List)
                })
                
                
            }
        },
        mounted(){
            this.getAll()
        }
    }
</script>

<style scoped lang="scss">
.cp{
    margin-top: 50px;
}
.wrap{
    font-size: 12px;
    display: flex;
    width: 100%;
    height: 55px;
    // background: skyblue;
    overflow: hidden;
    justify-content: space-around;
    .left{
        display: flex;
        width: 30%;
        height: 50px;
        // background: gold;
        margin-top: 2px;
        box-sizing: border-box;
        .img{
            width: 50px;
            height: 50px;
            // background: pink;
            border-radius: 25px;
            img{
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 25px;
            }
        }
        .name{
            line-height: 50px;
            text-align: center;
            margin-left: 10px;
        }
    }
    .right{
        width: 55%;
        height: 50px;
        margin-top: 2px;
        line-height: 50px;
    }
}
</style>