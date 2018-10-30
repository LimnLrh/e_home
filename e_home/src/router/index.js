import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components={
  home:()=>import("../components/home/index.vue"),
  login:()=>import("../views/login.vue"),
  message:()=>import("../views/message.vue"),
  user:()=>import("../views/user.vue"),
  orlife:()=>import("../views/orlife.vue"),
  xinwen:()=>import("../views/xinwen.vue"),
  xq:()=>import("../views/xq.vue"),
  person:()=>import("../login/personinfor.vue"),
  save:()=>import("../login/save.vue"),
  integral:()=>import("../login/integral.vue"),
  password:()=>import("../login/password.vue"),
  payment:()=>import("../login/payment.vue"),
  photo:()=>import("../login/photo.vue"),
  pdetails:()=>import("../login/pdetails.vue"),
  today:()=>import("../login/today.vue"),
  jfmx:()=>import("../login/jfmx.vue"),
  thought:()=>import("../login/thought.vue"),
  democratic:()=>import("../login/democratic.vue"),
  democracy:()=>import("../login/democracy.vue"),
  interaction:()=>import("../login/interaction.vue"),
  reply:()=>import("../login/reply.vue"),
  summarize:()=>import("../login/summary.vue"),
  canping:()=>import("../login/canping.vue"),
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.home
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: components.login
    },
    {
      path: '/message/:type',
      name: 'message',
      meta:{
        title:"通知早知道"
      },
      component: components.xinwen
    },
    {
      path: '/user',
      name: 'user',
      meta:{
        title:"我的党建"
      },
      component: components.user
    },
    {
      path: '/orlife',
      name: 'orlife',
      meta:{
        title:"掌上组织生活"
      },
      component: components.orlife
    },
    {
      path: '/democratic',
      name: 'democratic',
      meta:{
        title:"掌上组织生活"
      },
      component: components.democratic
    },
    {
      path: '/democracy',
      name: 'democracy',
      meta:{
        title:"民主评议"
      },
      component: components.democracy
    },
    {
      path: '/xinwen/:type',
      name: 'xinwen',
      meta:{
        title:"信工新闻眼"
      },
      component: components.xinwen
    },

    {
      path: '/oneclick/:type',
      name: 'onclick',
      meta:{
        title:"党建一点通"
      },
      component: components.xinwen
    },
    {
      path: '/identity/:type',
      name: 'identity',
      meta:{
        title:"党员亮身份"
      },
      component: components.xinwen
    },
    {
      path: '/study/:type',
      name: 'study',
      meta:{
        title:"随时随地学"
      },
      component: components.xinwen
    },
    {
      path: '/system/:type',
      name: 'system',
      meta:{
        title:"制度建设"
      },
      component: components.xinwen
    },
    {
      path: '/activity/:type',
      name: 'activity',
      meta:{
        title:"特色活动"
      },
      component: components.xinwen
    },
    {
      path: '/political/:type',
      name: 'political',
      meta:{
        title:"政治学习"
      },
      component: components.xinwen
    },

    {
      path: '/xq/:id',
      name: 'xq',
      meta:{
        title:"信工新闻眼"
      },
      component: components.xq
    },

    {
      path: '/person',
      name: 'person',
      meta:{
        title:"个人信息",
        requireAuth:true
      },
      component: components.person
    },
    {
      path: '/save',
      name: 'save',
      meta:{
        title:"修改个人信息"
      },
      component: components.save
    },
    {
      path: '/integral',
      name: 'integral',
      meta:{
        title:"个人积分量化"
      },
      component: components.integral
    },
    {
      path: '/password',
      name: 'password',
      meta:{
        title:"修改密码"
      },
      component: components.password
    },
    {
      path: '/payment',
      name: 'payment',
      meta:{
        title:"缴纳党费"
      },
      component: components.payment
    },

    {
      path: '/photo',
      name: 'photo',
      meta:{
        title:"随时随地拍"
      },
      component: components.photo
    },
    {
      path: '/pdetails',
      name: 'pdetails',
      meta:{
        title:"随时随地拍"
      },
      component: components.pdetails
    },
    {
      path: '/today',
      name: 'today',
      meta:{
        title:"党史上的今天"
      },
      component: components.today
    },
    {
      path: '/jfmx',
      name: 'jfmx',
      meta:{
        title:"积分明细"
      },
      component: components.jfmx
    },
    {
      path: '/thought',
      name: 'thought',
      meta:{
        title:"思想汇报"
      },
      component: components.thought
    },
    {
      path: '/summary',
      name: 'summary',
      meta:{
        title:"心得总结"
      },
      component: components.thought
    },

    {
      path: '/interaction',
      name: 'interaction',
      meta:{
        title:"党员云互动"
      },
      component: components.interaction
    },

    {
      path: '/reply/:id',
      // path: '/reply',
      name: 'reply',
      meta:{
        title:"党员云互动"
      },
      component: components.reply
    },
    {
      path: '/summarize',
      name: 'summarize',
      meta:{
        title:"个人总结"
      },
      component: components.summarize
    },
    {
      // path: '/canping/:id',
      path: '/canping',
      name: 'canping',
      meta:{
        title:"参评党员"
      },
      component: components.canping
    },

    
  ]
})
