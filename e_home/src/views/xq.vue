<template>
    <div class="xq">
        <div>
            <div class="header">
                <h4>{{details.title}}</h4>
            </div>
            <div class="text" v-html="details.content">
            </div>
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
            getDetails(){
                const id = this.$route.query.id
                // const id = this.$route.params.id
                console.log(id)
                this.$axios.get(`/news/newsContent.do?newsId=${id}`).then(res=>{
                    if(res.code == 1){
                        console.log(res.data)
                        this.details = res.data
                    }
                })
            }
        },
        mounted(){
            this.getDetails()
        }
    }
</script>

<style scoped lang="scss">
    .xq{
        margin-top: 50px;
        .header{
            width: 100%;
            font-size: 21px;
            font-weight: 100;
            h4{
                width: 95%;
                margin: 0 auto;
            }
        }
        .text{
            width: 100%;
            margin-top: 5px;
            font-size: 18px;
        }
    }
   
</style>

<style lang="scss">
p{
    width: 7.1rem;
    text-align:center;
    img{
        width: 100%;
        // margin:.4rem 0 .4rem .1rem;
    }
}
</style>

