<template>
        <div class="box">
            <div class="enter_box">
        <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <div class="input_box">
            <div class="group">
                <input type="text" placeholder="手机号">
                <div class="code">获取验证码</div>
            </div>
            <div class="hint" style="display:none;">
                <span>请输入手机号</span>
            </div>
            <div class="group1">
                 <input type="text" placeholder="验证码">
            </div>
        </div>
        <div class="btn">
            <button>登录</button>
        </div>
        <Tabbar></Tabbar>
    </div>
        </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
     components:{
        Tabbar
    }
}
</script>

<style lang ="scss" scoped>
.box{
    background: white;
    width:100%;
    height:6.3rem;
    overflow: hidden;
}
    .logo{
        margin:79px auto 40px;
        width:60px;
        text-align: center;
        line-height: 60px;
        img{
           height: 60px; 
        }
    }
    .group{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        input{
            height: 15px;
            border: 0;
            width: 100%;
            padding: 20px 0 ;
            padding-left:10px;
        }
        .code{
            width: 100px;
            height: 40px;
            font-size: 13px;
            line-height: 40px;
            text-align: center;
            background:#fff;
            color: #bdc0c5;
            
        }
    }
    .group1{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        input{
            height: 15px;
            border: 0;
            width: 100%;
            padding: 20px 0 ;
            padding-left:10px;
        }
    }
    .btn{
        margin: 70px 25px 0;
        button{
            border:0;
            width:100%;
            background: #e55513;
            font-size: 16px;
            color:#fff;
            height:44px;
            line-height: 45px;
        }
    }
</style>

