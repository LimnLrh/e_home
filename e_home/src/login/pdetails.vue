<template>
    <div class="details">
        <div class="main">
            <h3 v-text="details.title"></h3>
            <div class="desc" v-html="details.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                details:{}
            }
        },
        methods:{
            getdetails(){
                const id=this.$route.query.id
                // const id = this.$route.params.id
                console.log(id)
                this.$axios.get(`/news/newsContent.do?newsId=${id}`).then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.details = res.data
                        // console.log(this.details)
                    }
                })
            }
        },
        mounted(){
            this.getdetails()
        }
    }
</script>

<style scoped lang="scss">
    .details{
        margin-top: 50px;
        overflow: hidden;
    }
    .main{
        width: 100%;
        overflow: hidden;
        h3{
            font-size: 20px;
            font-weight: 500;
        }
        .desc{
            font-size: 13px;
            margin-top: 8px;
        }
    }
</style>