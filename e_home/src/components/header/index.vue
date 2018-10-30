<template>
    <mt-header :title="title" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left" >
        </mt-button>
        <mt-button icon="" slot="right" v-show="isShow" @click="$router.push({name:'save'})">编辑</mt-button>
        <!-- <mt-button icon="" slot="right" v-if="Show" @click="save">保存</mt-button> -->
    </mt-header>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.meta.title;
    },

    isShow(){
      if(this.$route.name === "person"){
        return true
      }else{
        return false
      }
    },
    // Show(){
    //   if(this.$route.name === "save"){
    //     return true
    //   }else{
    //     return false
    //   }
    // },
  },
};

</script>

<style  lang="scss">
    .mint-header{
        height: 50px;
        background: #c50526;
        .mint-header-title{
            font-size: 16px;
            font-weight: 500;
        }
    }
</style>