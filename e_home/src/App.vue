<template>
  <div id="app">
    <Comheader v-if="Show"></Comheader>
    <router-view/>
    <tables v-if="isShow"></tables>
  </div>
</template>
<script>
import tables from "./components/tables/index.vue"
import Comheader from "./components/header/index.vue"
export default {
  name: 'App',
  components:{
    tables,
    Comheader
  },
  computed:{
    isShow(){
      if(this.$route.name === "login" || this.$route.name === "xinwen" || this.$route.name === "integral" || this.$route.name === "save"
          || this.$route.name === "person" || this.$route.name === "reply" || this.$route.name === "summarize"

          ){
        return false
      }else{
        return true
      }
    },
    Show(){
      if(this.$route.name === "save"){
        return false
      }else{
        return true
      }
    }

  }
}
</script>

<style>
 * {padding: 0;margin: 0;}
</style>
