<template>
  <div class="page">
  	<div class="container">
			<div class="logo"><img src="https://www.car2go.cn/media/assets/patterns/static/img/auth_logo.svg"/></div>
			<div class="title">
				<span>登录</span>
			</div>
			<div class="logo-box">
				<input type="text" v-model="account" name="" id="" value="" placeholder="邮箱" />
				<input type="password" v-model="password" name="" id="" value="" placeholder="密码"/>
			</div>
			<div class="pwd">
				<a href="">忘记密码</a>
			</div>
			<button class="logo-btn" v-on:click="login">登录</button>
			<hr />
			<div class="pwd">
				<a href="">注册</a>
			</div>
		</div>
		<!--<form  onsubmit="">
			<input type="text" v-model="account" name="" id="" value="" />
			<input type="password" v-model="password" name="" id="" value="" />
			<button v-on:click="login" type="button">sign in</button>
		</form>-->
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource';
import * as types from '../store/types'

Vue.use(VueResource);

export default {
  name: 'hello',
  data () {
    return {
      account: '13617667426',
      password: '123456'
    }
  },
  methods: {
  	login: function() {
  		//console.log(this.account)
  			this.$http.jsonp("http://m.91renqi.com/web/login/Login?account="+this.account+"&password="+this.password,{emulateJSON: true}).then(
            function (res) {
                // 处理成功的结果
                //debugger;
                console.log(res);
            },function (res) {
            	// 处理失败的结果
            	//debugger;
            	console.log(res);
            	this.$store.commit(types.LOGIN, this.account)
				      let redirect = decodeURIComponent(this.$route.query.redirect || '/');
				      this.$router.push({
				        path: redirect
				      })
            }
        );/**/
  	},
  	go: function () {
  		this.$store.commit(types.LOGIN, this.account)
      let redirect = decodeURIComponent(this.$route.query.redirect || '/');
      this.$router.push({
        path: redirect
      })
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page{
		
	}
	.menu{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		line-height: 2.6rem;
		height: 2.6rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
		background: #42B983;
	}
	.menu>a,.menu>div{
		text-decoration: none;
		color: #fff;
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
	}
	.menu>a.active,.menu>div.active{
		background: #20A267;
	}
	* {
		padding: 0;
		margin: 0;
		font-size: 1rem;
		font-family: 微软雅黑, arial, sans-serif;
		-webkit-tap-highlight-color: transparent;
	}
	.container{width: 300px;padding: 30px 10px;margin: 0 auto;}
	.logo{text-align: center;margin-bottom: 40px;}
	.title{position: relative;height: 25px;line-height: 25px;text-align: center;}
	.title:before{content: "";display: block;border-bottom: 1px solid #ced0d0;position: absolute;top: 50%;left: 0;width: 100%;}
	.title>span{padding: 0 20px;background: #fff;color: #333;display: inline-block;position: relative;z-index: 2;}
	.logo-box{overflow:hidden;margin: 15px 0 30px;border: 1px solid #CED0D0;border-radius: 4px;line-height: 40px;}
	.logo-box>input{outline:none;border: none;border-top: 1px solid #CED0D0;margin-top: -1px;display: block;padding: 0 10px;height: 40px;width: 280px;font-size: 14px;}
	.logo-box>input:focus{box-shadow: inset 1px 1px 3px #afafaf;}
	.pwd{text-align: right;margin: 10px 0 30px;}
	.pwd>a{color: #00a0e1;text-decoration: none;font-size: 12px;}
	.pwd>a:hover{color: #007bad;}
	.pwd>a:active{color: #00a0e1;}
	.logo-btn{cursor:pointer;background:#00a0e1;margin-bottom:30px;width: 100%;height: 40px;line-height: 40px;border: none;outline: none;color: #fff;border-radius: 4px;font-size: 14px;}
	.logo-btn:hover{background: #007bad;}
	.logo-btn:active{background: #00a0e1;}
	hr {
	    border: none;
	    color: #ced0d0;
	    background-color: #ced0d0;
	    height: 0.5px;
	}
</style>
