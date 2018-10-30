<template>
    <div class="container message">
        <div class="auto">
            <div class="one">
                <div class="left"><img src="./message.png" alt=""></div>

                <div class="right">
                    <!-- <img src="./message.png" alt=""> -->
                    <a href=""><router-link to="/"><p>关于我院党总支近期举办的党的十九大知识竞赛通知</p></router-link></a>   
                    <p class="time">2017-10-30</p>
                </div>
            </div>
        </div>
        <div class="auto">
            <div class="one">
                <div class="left"><img src="./message.png" alt="" style="display:block"></div>

                <div class="right">
                    <!-- <img src="./message.png" alt=""> -->
                    <a href=""><router-link to="/"><p>关于我院党总支近期举办的党的十九大知识竞赛通知</p></router-link></a>   
                    <p class="time">2017-10-30</p>
                </div>
            </div>
        </div>
       
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .container{
        padding-top: 50px;
    }
    .auto{
        overflow: hidden;
        width: 100%;
        height: 100px;
        // background: skyblue;
        margin: 0 auto;
        color:#555;
        box-sizing: border-box;
        .one{
            margin-top: 30px;
            width: 6.5rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            .left{
                padding-top: 8px;
                img{
                    padding-top: 10px;
                }
            }

            .right{
                
                font-size: 15px;
                 width: 5rem;
                 padding-top: 10px;
                 a{
                    text-decoration: none;
                    color:#999
                 }
                 .time{
                     font-size: 13px;
                 }
            }
        }
    }
</style>