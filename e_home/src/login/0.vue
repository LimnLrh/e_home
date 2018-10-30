<template>
<div class="page container">
    <div class="img-wrap">
        <div v-for="(item,index) in imgs" :key="index" v-if="item">
            <img :src="item" class="upload-img">
        </div>
        <div  class="upLoad-wrap" >
            <upload @uploadSuccess="getIMGURL"  @Base64="Base64"></upload>
        </div>
    </div>
    <button @click="handleSubmit">提交审核</button>
</div>
</template>

<script type="text/ecmascript-6">
import  upload from "@/components/upload-img"
import { Toast } from 'mint-ui';
export default {
data() {
return {
    imgURL:"",
    header:"",
    subList:{
        pic_list:'',
        comment_id:this.$store.state.userInfo.branchId,
        user_id:localStorage.token
    },
    imgs:[], //存放图片上传成功后的base64
    img_list:[]  //存放图片上传成功后的地址，并作为中间量赋值给pic_list
}
},
methods: {
        getIMGURL(params){
            this.img_list.push(params);
            this.subList.pic_list = this.img_list.join(",")
        },

        Base64(base64){
            this.imgURL=base64;
            this.imgs.push(this.imgURL)
        },

        handleSubmit(){
            this.$axios.post(`/nationComment/submitSummary.do`,this.subList).then(res=>{
                if (res.code == 1) {
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
                        this.$router.push("/LifeChoice")
                }else{
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
                }
            })
        }
},
 components: {
    upload
 }
}
</script>

<style scoped lang="scss">
.img-wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 2.4rem;
}

.upload-img{
    width: 2.1rem;
    height: 2.1rem;
    margin: .2rem;
}


/deep/.upLoad-wrap{
    width: 2.1rem;
    height: 2.1rem;
    border:1px solid #ccc;
    margin:.2rem;
    position: relative;
    .icon-jia{
        font-size: 54px;
        position: absolute;
        color:#ccc;
        top: 50%;
        left:50%;
    }
}

button{
    position: fixed;
    left: 0;
    bottom: 1rem;
    background-color: #ef473a;
        border:none;
        height:1rem;
        width:100%;
        border-radius: 4px;
        color:#fff;
        font-size: 18px;
}
</style>

