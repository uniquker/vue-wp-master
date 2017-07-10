<template>
  <div class="page">
		<div class="content">
			{{msg}}
			<router-link :to="'/login'">登录</router-link>
			<router-view></router-view>
		</div>
  
  	<div class="menu">
  		<router-link :to="'page1'" active-class="active" tag='div' >首页</router-link>
  		<router-link :to="'page2'" active-class="active">产品中心</router-link>
  		<router-link :to="'page3'" active-class="active">个人中心</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to main page!'
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
</style>
