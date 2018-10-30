<template>
    <div class="today">
        <div class="wrap" v-html="desc">
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                desc:""
            }
            
        },
        methods:{
            getToday(){
                this.$axios.get("/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html").then(res=>{
                    console.log(res)
                    this.desc = res
                })
            }
        },
        mounted () {
            this.getToday()
        }
        
    }
</script>

<style scoped lang="scss">
    .today{
        margin-top: 50px;
    }
    .wrap{
        width: 100%;
        font-size: 15px;
    }
</style>