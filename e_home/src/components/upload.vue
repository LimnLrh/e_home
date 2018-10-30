<template>
  <!--此组件是用来封装图片上传的功能-->
  <div>
      <label class="upload-wrap">
        <i class="iconfont icon-jia" v-if="!img"></i>
        <input type="file" style="display:none" @change="upload"/>
        <img :src="img" v-if="img" class="IMg"/>
    </label>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    props:{
      img:{
        type:String,
      }
    },
    data()
    {
      return{
        imgUrl:"",
        size: 0,
      }
    },
    methods:{
      upload(event)
      {
        /**转base64进行上传*/
        // 利用fileReader对象获取file

        // console.log(event)
        let _this=this;
        var file = event.target.files[0];
        var filesize = file.size;
        if (filesize > 2101440){
          // 图片大于2MB
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e){
          // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
          var imgcode = e.target.result;
        
          var nativeCode=imgcode;
          // console.log(nativeCode)
          
          imgcode=imgcode.split(",")[1];
          // console.log(imgcode) 
          let formData=new FormData();
          formData.append("myFile",imgcode);
          axios.post("http://211.67.177.56:8080/hhdj/image/uploadBase64.do",formData,{headers: {'token': localStorage.token}}).then(res=>{
          if(res.data.error==200){
            _this.$emit("uploadSuccess",res.data.url);
            _this.$emit("Base64",nativeCode);
          }
          })
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  .upload-wrap
  {
    position:relative;
    display:block;
    width:45px;
    height:45px;
    border: 1px solid #e8e8e8;
    border-radius:6px;

  }
</style>
