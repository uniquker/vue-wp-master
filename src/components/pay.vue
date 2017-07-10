<template>
	<section class="pay-mask" @click="close_mask" v-show="payshow">
		<div class="container" @click.stop="">
			<div class="pay_title">请输入支付密码</div>
			<div class="flex f-d-r pay_content">
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[0]'>
				</div>
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[1]'>
				</div>
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[2]'>
				</div>
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[3]'>
				</div>
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[4]'>
				</div>
				<div class="ipt_pay">
					<input type="password" maxlength="1" disabled v-model='valArr[5]'>
				</div>
			</div>
		</div>
		<footer>
			<ul class="pay_btn">
				<li @click.stop="btnpassword($event)">1</li>
				<li @click.stop="btnpassword($event)">2</li>
				<li @click.stop="btnpassword($event)">3</li>
				<li @click.stop="btnpassword($event)">4</li>
				<li @click.stop="btnpassword($event)">5</li>
				<li @click.stop="btnpassword($event)">6</li>
				<li @click.stop="btnpassword($event)">7</li>
				<li @click.stop="btnpassword($event)">8</li>
				<li @click.stop="btnpassword($event)">9</li>
				<li class="b9"></li>
				<li @click.stop="btnpassword($event)">0</li>
				<li class="b9" @click.stop="btndelete">删除</li>
			</ul>
		</footer>
	</section>
</template>
<script>
	import $ from 'jquery'
	export default {
		props: {
			payshow: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				index: -1,
				valArr:['','','','','',''],
				valArred:['','','','','','']
			}
		},
		created() {},
		mounted() {
			$(".ipt_pay input:first").focus();
		},
		methods: {
			btnpassword(e) {
				//debugger;
				var obj = e.currentTarget;
				var payinput = $(".ipt_pay input");
				if(this.index < 5) {
					this.index++;
					//$(payinput[this.index]).val($(obj).text());
					this.valArred[this.index] = obj.innerHTML;
					this.valArr = [];
					this.valArr = this.valArred;
				}
				if(this.index == 5) {
					var pay_pwd = '';
					/*
					 *	jQuery方式 
					var payinput = $(".ipt_pay input");
					for(var i = 0; i < payinput.length; i++) {
						pay_pwd += $(payinput[i]).val();
					}
					console.log(pay_pwd);
					*/
					console.log(this.valArr.join(''))
				}
			},
			btndelete() {
				/*
				 *	jQuery方式 
				var payinput = $(".ipt_pay input");
				if(this.index >= 0) {
					$(payinput[this.index]).val('');
					this.index--;
				}*/
				//debugger;
				if(this.index >= 0) {
					this.valArred[this.index] = '';
					this.index--;
				}
				this.valArr = [];//从新赋值，为了Vue更新UI上的数据
				this.valArr = this.valArred;
			},
			close_mask() {
				this.payshow = false;
			}
		}
	}
</script>
<style scoped>
	img {
		width: 100%;
		height: 100%;
	}
	
	section {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 998;
		background: rgba(0, 0, 0, .6)
	}
	
	.container {
		position: absolute;
		top: 4rem;
		background: #fff;
		border-radius: 5px;
		left: .533333rem;
		right: .533333rem;
		padding-bottom: .266667rem;
	}
	
	.pay_title {
		position: relative;
		font-size: .8rem;
		text-align: center;
		color: #333;
		height: 2.4rem;
		line-height: 2.4rem;
		border-bottom: 1px solid #ddd;
	}
	
	.close {
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: .72rem;
		height: .72rem;
	}
	
	.pay_content {
		border-bottom: 1px solid #ddd;
		border-top: 1px solid #ddd;
		border-right: 1px solid #ddd;
		margin: .9rem .533333rem;
	    overflow: hidden;
	}
	.pay_content:after{
		content: "";
		display: table;
		clear: both;
	}
	.ipt_pay {
		width: 16.666%;
		height: 2rem;
		border-left: 1px solid #ddd;
		float: left;
	}
	
	.ipt_pay input {
		border: 0;
		height: 100%;
		width: 100%;
		text-align: center;
		font-size: .88rem;
		background: #fff;
	}
	
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		font-weight: 600;
	}
	
	.pay_btn {}
	
	.pay_btn li {
		width: 33.3333%;
		float: left;
		height: 2.2rem;
		line-height: 2.2rem;
		text-align: center;
		background: #fff;
		font-size: .48rem;
		border-right: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
	}
	
	.pay_btn li:active {
		background: #C2C2C2;
	}
	
	.b9:active {
		background: #fff !important;
	}
	
	.b9 {
		background: #C2C2C2 !important;
	}
</style>