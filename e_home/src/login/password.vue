<template>
    <div class="header">
        <div class="wrap">
            <form action="" class="form">
                <div class="top">
                    旧密码:<br>
                    <input type="text" name="" id="">
                </div>
                <div class="top">
                    新密码:<br>
                    <input type="text" name="" id="">
                </div>
                <div class="top">
                    确认密码:<br>
                    <input type="text" name="" id="">
                </div>
                <div class="btn">
                    <mt-button size="large" class="confirm">确定</mt-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .header{
        margin-top: 50px;
        overflow: hidden;
    }
    .wrap{
        height: 300px;
        width: 300px;
        margin:60px auto;
        box-sizing: border-box;
        overflow: hidden;
        .form{
            font-size: 18px;
            color:#666;
            input{
                height: 41px;
                width: 99%;
                border:1px solid #888;
                border-radius: 6px;
                margin:3px auto;
            }
            .btn{
                margin-top: 10px;
                
                .confirm{
                    background: #ef473a;
                    color:white;
                }
            }
        }
    }
</style>