<template>
    <div class="xinwen" ref="wrapper">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
            <router-link :to="{path:'/xq/:query',query:{id:item.newsId}}" v-for="(item,index) in newsArr" v-bind:key="index">
            <!-- <router-link :to="{name:'xq',params:{id:item.newsId}}" v-for="(item,index) in newsArr" v-bind:key="index"> -->
                <div class="wrap" >
                    <div class="left">
                        <img :src="item.pic" alt="" >
                    </div>
                    <div class="right">
                        <div class="top" >
                            {{item.title}}
                        </div>
                        <div class="bottom">
                            <div class="b-left">{{item.currentTime}}</div>
                            <div class="b-right"><img src="./eye.png" alt="">{{item.count}}</div>
                        </div>
                    </div>
                </div>
            </router-link>
        </mt-loadmore>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newsArr:[],
                //可以进行上拉
                allLoaded: false,
                //是否自动触发上拉函数
                isAutoFill: false,
                wrapperHeight: 0,
                page: 0
            }
            
        },
        methods:{
            //   下拉刷新
            loadTop() {
                this.loadFrist();
            },
            // 上拉加载
            loadBottom() {
                this.loadMore();
            },
            loadFrist() {
                this.$axios
                .get(`/news/newsList.do?page=${this.page}&rows=10&type=0`)
                .then(res => {
                    this.page = 1;
                    this.allLoaded = false; // 可以进行上拉
                    this.newsArr = res.rows;
                    // this.$refs.loadmore.onTopLoaded();
                })
                .catch(error => {
                    console.log(error);
                    // alert("网络错误，不能访问");
                });
            },
            //加载更多
            loadMore() {
                this.$axios
                    .get(`/news/newsList.do?page=${this.page}&rows=10&type=0`)
                    .then(res => {
                        
                        // concat数组的追加
                        
                        this.newsArr = this.newsArr.concat(res.rows);
                        if (res.rows.length<10) {
                            this.allLoaded = true; // 若数据已全部获取完毕
                        }   
                            
                            this.$refs.loadmore.onBottomLoaded();
                            this.page++;
                        })
                    .catch(error => {
                        console.log(error);
                        // alert("网络错误，不能访问");
                    });
                },
                getNews(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=0").then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.newsArr = res.rows
                    }
                })
            },
        },

        // mounted () {
        //     // 父控件要加上高度，否则会出现上拉不动的情况
        //     this.wrapperHeight =
        //     document.documentElement.clientHeight -
        //     this.$refs.wrapper.getBoundingClientRect().top;
        // },

        created(){
            this.getNews(),
            this.loadFrist()
            // this.loadMore()
        }
    }
</script>

<style scoped lang="scss">
    .xinwen{
        margin-top: 50px;
    }

    .xinwen{
        width: 100%;
        height:100px;
        // background: gold;
        
        box-sizing: border-box;
        a{
            text-decoration: none;
            color:#666;
        }
        .wrap{
            box-sizing: border-box;
            width:95%;
            margin: 0 auto;
            // background: skyblue;
            display: flex;
            justify-content: space-between;
            .left{
                padding-top: 10px;
                img{
                    display:block;
                    width: 80px;
                    height: 80px;
                }
            }
            .right{
                font-size: 15px;
                padding-top: 10px;
                margin-left: 15px;
                .top{
                    height: 50px;
                    overflow: hidden;
                }
                .bottom{
                    width: 5rem;
                    font-size: 13px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;

                    .b-left{
                        height: 15px;
                        line-height: 15px;                       
                    }
                    .b-right{
                        padding-top: 1px;
                        
                        img{
                            // display: block;
                            width: 15px;
                        }
                    }

                }
            }
        }
    }

</style>