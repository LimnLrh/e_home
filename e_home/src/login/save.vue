<template>
    <div class="save">
        <mt-header :title="title" fixed>
            <mt-button icon="back" @click="$router.back()" slot="left" >
            </mt-button>
            <!-- <mt-button icon="" slot="right"  @click="$router.push({name:'save'})">编辑</mt-button> -->
            <mt-button icon="" slot="right"  @click="save">保存</mt-button>
        </mt-header>
         <div class="wrap">
            <div class="left">头像</div>
            <!-- <div class="right"> <img src="../assets/nfshq.jpg" alt=""></div> -->
            <div class="right"> 
                <upload @uploadSuccess="getIMGURL" :img="imgURL" @Base64="Base64" ></upload>
            </div>
        </div>
         <div class="wrap">
            <div class="left">姓名</div>
            <div class="right"><input type="text" v-model="person.username"></div>
        </div>
         <div class="wrap">
            <div class="left">身份证</div>
            <div class="right"><input type="text" v-model="this.$store.state.userInfo.idCard" disabled></div>
        </div>
         <div class="wrap">
            <div class="left">家庭住址</div>
            <div class="right"><input type="text" v-model="person.hometown"></div>
        </div>
         <div class="wrap">
            <div class="left">工作地址</div>
            <div class="right"><input type="text" v-model="person.address"></div>
        </div>
         <div class="wrap">
            <div class="left">民族</div>
            <div class="right"><input type="text" v-model="person.nation"></div>
        </div>
         <div class="wrap">
            <div class="left">微信号</div>
            <div class="right"><input type="text" v-model="person.wxNum"></div>
        </div>
         <div class="wrap">
            <div class="left">qq号</div>
            <div class="right"><input type="text" v-model="person.qqNum"></div>
        </div>
         <div class="wrap">
            <div class="left">性别</div>
            <div class="right ">
                <div class="sex">
                    <input type="radio" name="sex" value="1" class="sex" style="transform: scale(0.5,0.5);display:inline-block" v-model="person.sex"/>男
                    <input type="radio" name="sex" value="0" class="sex" style="transform: scale(0.5,0.5);display:inline-block" v-model="person.sex"/>女
                </div>
            </div>
        </div>
         <div class="wrap">
            <div class="left">最高学历</div>
            <div class="right"><input type="text" v-model="person.education"></div>
        </div>
         <div class="wrap">
            <div class="left">职称</div>
            <div class="right"><input type="text" v-model="person.jobRank"></div>
        </div>
         <div class="wrap">
            <div class="left">薪资水平</div>
            <div class="right"><input type="text" v-model="person.salary"></div>
        </div>
         <div class="wrap">
            <div class="left">入党时间</div>
            <div class="right time">
                <input type="text" id="test1" v-model="person.joinPartyTime">
            </div>
        </div>
         <div class="wrap">
            <div class="left">党费最后缴纳时间</div>
            <div class="right time">
                <input type="text" id="test2" v-model="person.lastPayTime">
            </div>
        </div>
         <div class="wrap">
            <div class="left">当前身份</div>
            <div class="right">
                <select v-model="person.partyIdentity">
                    <option value="党员">党员</option>
                    <option value="预备党员">预备党员</option>
                    <option value="积极分子">积极分子</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    import upload from "@/components/upload"
    export default {
        components:{
            upload
        },
        data(){
            return{
                person:{
                    username:"",
                    hometown:"",
                    address:"",
                    nation:"",
                    wxNum:"",
                    qqNum:"",
                    sex:"",
                    education:"",
                    jobRank:"",
                    salary:"",
                    joinPartyTime:"",
                    lastPayTime:"",
                    partyIdentity:"",
                    header:"",
                    token:localStorage.token
                },
                imgURL:"",
            }
        },
        methods:{
            getIMGURL(params){
                this.person.header=params;
            },
            Base64(base64){
                this.imgURL=base64;
            },
            
            personMessage(){
                // this.token = localStorage.getItem("token")
                // let token = localStorage.getItem("token")
                this.$axios.get(`/user/userInfo.do`).then(res=>{
                    console.log(res)
                    // var c = res.data
                    // delete c.idCard
                    // console.log(c);
                    // this.person = res.data
                    // delete this.person.idCard
                    this.$store.commit("HANDLE_USERINFO",res.data) 
                    this.person.username = res.data.username
                    this.person.hometown = res.data.hometown
                    this.person.address = res.data.address
                    this.person.nation = res.data.nation
                    this.person.wxNum = res.data.wxNum
                    this.person.qqNum = res.data.qqNum
                    this.person.sex = res.data.sex
                    this.person.education = res.data.education
                    this.person.jobRank = res.data.jobRank
                    this.person.salary = res.data.salary
                    this.person.joinPartyTime = res.data.joinPartyTime
                    this.person.lastPayTime = res.data.lastPayTime
                    this.person.partyIdentity = res.data.partyIdentity
                    this.imgURL = res.data.header
                })
            },

            save(){
                this.$axios.post(`/user/modifyInfo.do`,this.person).then(res=>{
                    this.$router.push("/person")
                })
            }
        },
        mounted(){
            this.personMessage(),
                laydate.render({
                    elem: '#test1' ,//指定元素
                    calendar: true,
                    done: (value) => {
                        this.userInfo.joinPartyTime = value
                    }
                }),
                laydate.render({
                    elem: '#test2' ,//指定元素
                    calendar: true,
                    done: (value) => {
                        this.userInfo.joinPartyTime = value
                    }
                })
        },
        computed: {
            title() {
                return this.$route.meta.title;
            }
        }
    }
</script>

<style scoped lang="scss">
    .save{
        margin-top: 50px;
        font-size: 15px;
    }
        .mint-header{
        height: 50px;
        background: #c50526;
        .mint-header-title{
            font-size: 16px;
            font-weight: 500;
        }
    }
    .wrap{
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #bbb;
        .left{
            height: 50px;
            line-height: 50px;
            width: 5rem;
            margin-left: 8px;
        }
        .right{
            margin-top: 5px;
            width: 1.8rem;
            height:40px;
            // background: gold;
            // margin-right: 8px;
            line-height: 40px;
            text-align: center;
            input{
                width: 50px;
                height: 30px;
                outline: none;
                border: none;
                
            }
            img{
                display: block;
                width: 0.8rem;
                height: 0.8rem;
                margin: 0 auto;
            }
            .upl{
                display: block;
                width: 0.8rem;
                height: 0.8rem;
                margin: 0 auto;
            }
            select{
                border: none;
            }
            .sex{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
                input{
                    margin-top: 5px;
                }
            }
        }
        .time{
            input{
                width: 68px;
                height: 30px;
                outline: none;
                border: none;
            }
        }
    }

    /deep/ .IMg
    {
      width:40px;
      height:40px;
      margin-left: 30px;
    }
</style>