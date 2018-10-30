import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        userInfo:{
                // id:"",
                // username:"",
                // password:"",
                // phone:"",
                // // address:"",
                // age:"",
                // birthday:"",
                // branchId:"",
                // address: "",
                // count: "",
                // disabled:"",
                // education: "",
                // header: "",
                // hometown: "",
                // id: "",
                // idCard: "",
                // jobRank: "",
                // joinPartyTime: "",
                // lastPayTime: "",
                // leadPerson: "",
                // nation: "",
                // partyStatus:"",
                // phone: "",
                // qqNum: "",
                // salary: "",
                // sex:"",
                // totalScore: "",
                // username: "",
                // wxNum: "",
            },
            reply:{

            }
        },

    mutations:{
        "HANDLE_USERINFO"(state,payload){
            state.userInfo = payload
        },
        "REPLY_USER"(state,payload){
            state.reply = payload
        }
    },
    plugins:[
        createPersistedState({
            storage:{
                getItem:key =>sessionStorage.getItem(key),
                setItem:(key,value)=>
                    sessionStorage.setItem(key,value),
                    removeItem:key =>sessionStorage.removeItem(key)
            }
        })
    ]
})


export default store