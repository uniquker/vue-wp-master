<template>
  <div class="page">
		<form  onsubmit="">
			<input type="text" v-model="account" name="" id="" value="" />
			<input type="password" v-model="password" name="" id="" value="" />
			<button v-on:click="login" type="button">sign in</button>
		</form>
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
</style>
