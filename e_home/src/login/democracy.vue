<template>
    <div class="mzhupy">
        <div class="wrap">
            <div class="title">评议须知</div>
            <div class="desc">
                在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：
            </div>
            <div class="list">
                <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
                <p>2、参加“两学一做”学习教育情况；</p>
                <p>3、参加党的组织生活、按要求交纳党费；</p>
                <p>4、学习情况、业务能力提高情况；</p>
                <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
                <p>6、联系群众、关心群众、服务群众情况；</p>
                <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
            </div>
            <div class="select" >
                <div class="left">
                    <select name="" id="" class="slc" v-model="select">
                    <!-- <select name="" id="" class="slc" @change="change($event)"> -->
                        <option value="" >请选择</option>
                        <option :value="item.id" v-for="(item,index) in option" v-bind:key="index">{{item.branch}}</option>
                    </select>
                </div>
                <div class="right" >
                    <mt-button  size="normal" class="btn" @click="getAll" >下一步</mt-button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                option:[],
                select:""
            }
        },
        methods:{
            getOption(){
                this.$axios.get("/branch/findAll.do").then(res=>{
                    console.log(res)
                    this.option = res.rows

                })
            },

            getAll(){
                this.$router.push({name:'canping',query:{id:this.select}},)
            },
            
            // change:function(evt){
            //     // console.log(evt.currentTarget.value)
            //     console.log(evt)
            //     // console.log(this.select)
            // }

       
        },
         mounted(){
            this.getOption()
            // this.getAll()
        },
        // watch:{
        //     select:function(va1,va2){
        //         console.log(va1)
        //         console.log(va2)

        //     }
        // }
    }
</script>

<style scoped lang="scss">
    .mzhupy{
        margin-top: 50px;
        overflow: hidden;
        .wrap{
            width: 100%;
            margin-top: 30px;
            color:#888;
            .title{
                font-size: 16px;
                text-align: center;
            }
            .desc{
                width: 98%;
                margin: 25px auto 25px;
                font-size: 16px;
            }
            .list{
                width: 98%;
                margin: 0 auto;
                font-size: 15px;
                p{
                    margin-top: 8px;
                }
            }
            .select{
                width: 6rem;
                display: flex;
                margin: 30px auto;
                .left{
                    .slc{
                        width: 188px;
                        height: 41.69px;
                        background: #c50206;
                        border-radius: 4px;
                        color: white;
                        option{
                            background: white;
                            color: #222;
                            outline: none;
                        }
                    }
                }
                .right{
                    margin-top: 3px;
                    margin-left: 25px;
                    .btn{
                        background: #c50206;
                        color: white;
                    }
                }
            }
            
        }
    }
</style>