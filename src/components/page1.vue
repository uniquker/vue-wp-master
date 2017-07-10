<template>
  <div class="hello">
  	<img src="/static/logo.png">
    <h1>{{ msg }}</h1>
    <button v-on:click="logout">注销</button>
    <p>pay password test ,<router-link :to="'/pay'">click here!</router-link></p>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to page1 !'
    }
  },
  methods: {
  	logout: function () {
  		this.$store.commit(types.LOGOUT)
  		console.log("注销成功，欢迎下次再来！");
  		this.$router.push('/');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
